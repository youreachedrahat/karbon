import { useEffect, useMemo, useState } from "react";
import { Wallet } from "@/types/cardano";
import { Button } from "@nextui-org/button";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, cn, DropdownSection } from "@nextui-org/react";

export default function WalletConnectors(props: { onConnectWallet: (wallet: Wallet) => Promise<void>, balance: Number | undefined, resetLucid: () => void }) {
  const { onConnectWallet, resetLucid, balance } = props;

  const [wallets, setWallets] = useState<Wallet[]>();
  const [selectedwallet, setSelectedWallet] = useState<Wallet | undefined>();


  useEffect(() => {
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

  ///////////////////////////////////////////////////////////////////////////////////

  if (!wallets) return <span className="uppercase">Browsing Cardano Wallets</span>;

  if (!wallets.length) return <span className="uppercase">No Cardano Wallet</span>;

  return (
    <div className="flex flex-wrap gap-2">


      <Dropdown
        showArrow
        classNames={{
          base: "before:bg-default-200", // change arrow background
          content: " py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black",
        }}
      >
        <DropdownTrigger className="rounded-sm">
          <Button
            variant="bordered"
            className="text-sm font-normal text-default-600 bg-default-100"
            startContent={selectedwallet && <img className="w-7" src={selectedwallet.icon} alt="I"/>}
          >
            {selectedwallet ? (
              balance ? (<>₳ {balance.toFixed(2)} </>) : "Connecting..."
            ) : "Connect Wallet"}
          </Button>
        </DropdownTrigger>
        <DropdownMenu variant="faded" aria-label="Dropdown menu with description"

        >
          {selectedwallet ?
            <DropdownSection>

              <DropdownItem
                key="0"
                // className="rounded"
                classNames={{
                  base: "rounded-sm", // change arrow background
                }}
                startContent={<img className="w-7" src={selectedwallet.icon} alt="I" />}
                onClick={() => {
                  // onConnectWallet(wallet);
                  setSelectedWallet(undefined);
                  resetLucid()
                }}
              >
                Disconnect
              </DropdownItem>

            </DropdownSection>
            :
            <DropdownSection>
              {wallets.map((wallet, w) => (
                <DropdownItem
                  key={`wallet.${w}`}
                  // className="rounded"
                  classNames={{
                    base: "rounded-sm", // change arrow background
                  }}
                  startContent={<img className="w-7" src={wallet.icon} alt="I"/>}
                  onClick={() => {
                    onConnectWallet(wallet);
                    setSelectedWallet(wallet);
                  }}
                >
                  {(wallet.name).toUpperCase()}
                </DropdownItem>
              ))}
            </DropdownSection>
          }
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}