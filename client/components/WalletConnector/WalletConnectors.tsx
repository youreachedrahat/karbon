"use client"
import { useEffect, useMemo, useState } from "react";
import { Wallet } from "@/types/cardano";
import { Button } from "@nextui-org/button";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, cn, DropdownSection } from "@nextui-org/react";
import { signal } from "@preact/signals-react";
import { Blockfrost, Lucid, LucidEvolution, Network } from "@lucid-evolution/lucid";

const NETWORK = process.env.NEXT_PUBLIC_CARDANO_NETWORK as Network;
const BF_URL = `${process.env.NEXT_PUBLIC_BF_URL}`;
const BF_PID = `${process.env.NEXT_PUBLIC_BF_PID}`;
const BLOCKFROST = new Blockfrost(BF_URL, BF_PID);

export const lucidInit = signal<LucidEvolution | undefined>(undefined);
Lucid(BLOCKFROST, NETWORK)
  .then((lucidInstance) => {
    lucidInit.value = lucidInstance; // Update the signal value
  })
  .catch((error) => {
    console.error("Failed to initialize Lucid:", error);
  });
export default function WalletConnectors() {
  const [wallets, setWallets] = useState<Wallet[]>();
  const [selectedwallet, setSelectedWallet] = useState<Wallet | undefined>();
  const [balance, setBalance] = useState<Number>();



  useEffect(() => {
    console.log(lucidInit.value)
    const wallets: Wallet[] = [];

    const { cardano } = window;

    for (const c in cardano) {
      const wallet = cardano[c];

      if (!wallet.apiVersion) continue; // skip
      wallets.push(wallet);
    }

    wallets.sort((l: Wallet, r: Wallet) => {
      return l.name.toUpperCase() < r.name.toUpperCase() ? -1 : 1;
    });
    setWallets(wallets);
  }, []);

  async function onWalletConnect(wallet: Wallet) {
    const lucid = lucidInit.value
    setSelectedWallet(wallet)
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
    } catch (error) {
      console.log(error);
    }
  }

  function onWalletDisconnect() {
    Lucid(BLOCKFROST, NETWORK)
      .then((lucidInstance) => {
        lucidInit.value = lucidInstance;
      })
      .catch((error) => {
        console.error("Failed to initialize Lucid:", error);
      });
    setBalance(undefined)
    setSelectedWallet(undefined);
  }

  return (
    <div className="flex flex-wrap gap-2">


      <Dropdown
        showArrow
        classNames={{
          base: "before:bg-default-200 ", // change arrow background
          content: "py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black",
        }}
      >
        <DropdownTrigger className="rounded-small">
          <Button
            variant="bordered"
            className="text-sm font-normal text-default-600 bg-default-100"
            startContent={selectedwallet && <img className="w-6" src={selectedwallet.icon} alt="I" />}
          >
            {selectedwallet ? (
              balance ? (<>₳{balance.toFixed(2)} </>) : "Connecting..."
            ) : "Connect Wallet"}
          </Button>
        </DropdownTrigger>
        <DropdownMenu variant="faded" aria-label="Wallet connector dropdown menu">
          <DropdownSection>

            {!wallets ?
              <DropdownItem
                key="0"
                classNames={{
                  base: "rounded-small text-center flex justify-center items-center",
                }}
              >
                <>Browsing Cardano Wallet</>
              </DropdownItem>
              : (
                !wallets.length ?
                  <DropdownItem
                    key="0"
                    classNames={{
                      base: "rounded-small text-center flex justify-center items-center",
                    }}
                  >
                    <>No Cardano Wallets</>
                  </DropdownItem>
                  : (
                    !selectedwallet ?
                      wallets.map((wallet, w) => (
                        <DropdownItem
                          key={`wallet.${w}`}
                          classNames={{
                            base: "rounded-small space-x-2", // change arrow background
                          }}
                          startContent={<img className="w-6" src={wallet.icon} alt="I" />}
                          showDivider={w !== wallets.length - 1}
                          onClick={() => {
                            onWalletConnect(wallet)
                          }}
                        >
                          {(wallet.name).toUpperCase()}
                        </DropdownItem>
                      ))
                      :
                      <DropdownItem
                        key="0"
                        classNames={{
                          base: "rounded-small space-x-2",
                        }}
                        startContent={<img className="w-6" src={selectedwallet.icon} alt="I" />}
                        onClick={onWalletDisconnect}
                      >
                        Disconnect
                      </DropdownItem>

                  )
              )

            }

          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}