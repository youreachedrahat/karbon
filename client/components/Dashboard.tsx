import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Button } from "@nextui-org/button";

import { lucidInit } from "./WalletConnector/WalletConnectors";
import {
  Address,
  applyDoubleCborEncoding,
  applyParamsToScript,
  Constr,
  Data,
  fromText,
  LucidEvolution,
  MintingPolicy,
  mintingPolicyToId,
  TxSignBuilder,
} from "@lucid-evolution/lucid";


const Script = {
  MintAlwaysTrue: applyDoubleCborEncoding(
    "58b801010032323232323232323225333003323232323253330083370e900018051baa0011325333333010003153330093370e900018059baa0031533300d300c37540062944020020020020020020dd7180698059baa00116300c300d003300b002300a002300a001300637540022930a998022491856616c696461746f722072657475726e65642066616c73650013656153300249010f5f72656465656d65723a20566f696400165734ae7155ceaab9e5573eae855d12ba41"
  ),
};

export default function Dashboard(props: {
  setActionResult: (result: string) => void;
  onError: (error: any) => void;
}) {
  const { setActionResult, onError } = props;
  const lucid = lucidInit.value
  if (!lucid) return <>Intializing Lucid</>

  async function submitTx(tx: TxSignBuilder) {
    const txSigned = await tx.sign.withWallet().complete();
    const txHash = await txSigned.submit();

    return txHash;
  }

  type Action = () => Promise<void>;
  type ActionGroup = Record<string, Action>;

  const actions: Record<string, ActionGroup> = {
    AlwaysTrue: {
      mint: async () => {
        try {
          const mintingValidator: MintingPolicy = { type: "PlutusV3", script: Script.MintAlwaysTrue };

          const policyID = mintingPolicyToId(mintingValidator);
          const assetName = "Always True Token";

          const mintedAssets = { [`${policyID}${fromText(assetName)}`]: 1_000n };
          const redeemer = Data.void();

          const tx = await lucid
            .newTx()
            .mintAssets(mintedAssets, redeemer)
            .attach.MintingPolicy(mintingValidator)
            .attachMetadata(
              721,
              // https://github.com/cardano-foundation/CIPs/tree/master/CIP-0025#version-1
              {
                [policyID]: {
                  [assetName]: {
                    name: assetName,
                    image: "https://avatars.githubusercontent.com/u/1",
                  },
                },
              }
            )
            .complete();

          submitTx(tx).then(setActionResult).catch(onError);
        } catch (error) {
          onError(error);
        }
      },

      burn: async () => {
        try {
          const address = await lucid.wallet().address();
          const mintingValidator: MintingPolicy = { type: "PlutusV3", script: Script.MintAlwaysTrue };

          const policyID = mintingPolicyToId(mintingValidator);
          const assetName = "Always True Token";
          const assetUnit = `${policyID}${fromText(assetName)}`;
          const burnedAssets = { [assetUnit]: -1_000n };
          const redeemer = Data.void();

          const utxos = await lucid.utxosAtWithUnit(address, assetUnit);

          const tx = await lucid.newTx().collectFrom(utxos).mintAssets(burnedAssets, redeemer).attach.MintingPolicy(mintingValidator).complete();

          submitTx(tx).then(setActionResult).catch(onError);
        } catch (error) {
          onError(error);
        }
      },
    },
  };

  return (
    <div className="flex flex-col gap-2">
      <Accordion variant="splitted">
        {/* Always True */}
        <AccordionItem key="1" aria-label="Accordion 1" title="Always True">
          <div className="flex flex-wrap gap-2 mb-2">
            <Button className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg capitalize" radius="full" onClick={actions.AlwaysTrue.mint}>
              Mint
            </Button>
            <Button className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg capitalize" radius="full" onClick={actions.AlwaysTrue.burn}>
              Burn
            </Button>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
}