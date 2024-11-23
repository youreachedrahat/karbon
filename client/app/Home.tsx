import { useState } from "react";
import Dashboard from "@/components/Dashboard";
import { Button } from "@nextui-org/button";
import Link from "next/link";

export default function Home() {

  return (
    <>
      <div className="flex justify-center overflow-hidden">
        <div className="flex flex-col gap-2 overflow-hidden">
          <Button>
            <Link
              className=""
              color="foreground"
              href="./contract"
            >
              example Contract
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}