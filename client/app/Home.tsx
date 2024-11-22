import { useEffect, useState } from "react";
import Dashboard from "@/components/Dashboard";

import { Address, Blockfrost, Lucid, LucidEvolution, Network } from "@lucid-evolution/lucid";

export default function Home() {
  const NETWORK = process.env.NEXT_PUBLIC_CARDANO_NETWORK as Network;
  const BF_URL = `${process.env.NEXT_PUBLIC_BF_URL}`;
  const BF_PID = `${process.env.NEXT_PUBLIC_BF_PID}`;
  const BLOCKFROST = new Blockfrost(BF_URL, BF_PID);

  const [lucid, setLucid] = useState<LucidEvolution>();
  const [result, setResult] = useState("");

  useEffect(() => {
    Lucid(BLOCKFROST, NETWORK).then(setLucid).catch(handleError);
  }, []);


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
  
  //#endregion

  return (
    <>
      <div className="flex justify-center overflow-hidden">
        <div className="flex flex-col gap-2 overflow-hidden">
          {lucid ? (
            <Dashboard onError={handleError} setActionResult={setResult} />
          ) : (
            <span className="uppercase">Initializing Lucid</span>
          )}
          <span className="font-mono break-words whitespace-pre-wrap">{result}</span>
        </div>
      </div>
    </>
  );
}