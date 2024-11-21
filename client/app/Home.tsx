import { useEffect, useState } from "react";
import Dashboard from "@/components/Dashboard";

import { Address, Blockfrost, Lucid, LucidEvolution, Network } from "@lucid-evolution/lucid";
import { Wallet } from "@/types/cardano";
import { Navbar } from "@/components/navbar";

export default function Home() {
  const NETWORK = process.env.NEXT_PUBLIC_CARDANO_NETWORK as Network;
  const BF_URL = `${process.env.NEXT_PUBLIC_BF_URL}`;
  const BF_PID = `${process.env.NEXT_PUBLIC_BF_PID}`;
  const BLOCKFROST = new Blockfrost(BF_URL, BF_PID);

  const [lucid, setLucid] = useState<LucidEvolution>();
  const [address, setAddress] = useState<Address>("");
  const [balance, setBalance] = useState<Number>();
  const [result, setResult] = useState("");

  useEffect(() => {
    Lucid(BLOCKFROST, NETWORK).then(setLucid).catch(handleError);
  }, []);

  //#region utils
  function resetLucid() {
    setLucid(undefined)
    setBalance(undefined)
    setAddress("")
    Lucid(BLOCKFROST, NETWORK).then(setLucid).catch(handleError);
  }


  function handleError(error: any) {
    const { info, message } = error;

    /**
     * To parse Lucid error
     * @param error
     * @returns error JSON
     */
    function toJSON(error: any) {
      try {
        const errorString = JSON.stringify(error);
        const errorJSON = JSON.parse(errorString);

        return errorJSON;
      } catch {
        return {};
      }
    }

    const { cause } = toJSON(error);
    const { failure } = cause ?? {};

    const failureCause = failure?.cause;
    const failureInfo = failureCause?.info;
    const failureMessage = failureCause?.message;

    setResult(`${failureInfo ?? failureMessage ?? info ?? message ?? error}`);
    console.error(failureCause ?? { error });
  }

  /**
   * To handle wallet connection events. We will use the wallet address as our connection state,
   * eg. empty address == not connected; has address == connected;
   * @param wallet
   */
  async function onConnectWallet(wallet: Wallet) {
    try {
      if (!lucid) throw "Uninitialized Lucid";

      const api = await wallet.enable();
      lucid.selectWallet.fromAPI(api);

      const address = await lucid.wallet().address();
      const utxos = await lucid.utxosAt(address);
      const totalLovelace = utxos.reduce((sum, utxo) => {
        return sum + (utxo.assets.lovelace || 0n);
      }, 0n);
      setBalance(Number(totalLovelace / 1_000_000n));
      setAddress(address);
    } catch (error) {
      handleError(error);
    }
  }
  //#endregion

  return (
    <>
      <Navbar onConnectWallet={onConnectWallet} balance={balance} resetLucid={resetLucid} />
      <div className="flex justify-center overflow-hidden">
        <div className="flex flex-col gap-2 overflow-hidden">
          {lucid ? (
              <Dashboard address={address} lucid={lucid} onError={handleError} setActionResult={setResult} />
          ) : (
            <span className="uppercase">Initializing Lucid</span>
          )}
          <span className="font-mono break-words whitespace-pre-wrap">{result}</span>
        </div>
      </div>
    </>
  );
}