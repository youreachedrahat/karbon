import { useState } from "react";
import Dashboard from "@/components/Dashboard";

export default function Home() {
  const [result, setResult] = useState("");

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

          <Dashboard onError={handleError} setActionResult={setResult} />

          <span className="font-mono break-words whitespace-pre-wrap">{result}</span>
        </div>
      </div>
    </>
  );
}