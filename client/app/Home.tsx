import { Button } from "@nextui-org/button";
import Link from "next/link";
import dynamic from 'next/dynamic';
const ReadmeContent = dynamic(() => import('./README.mdx'));
export default function Home() {

  return (
    <>
      <div className="flex justify-center overflow-hidden min-w-full">
        <div className="flex flex-col gap-2 overflow-hidden">
        <Button className="bg-blue-600 mx-auto py-2">
            <Link
              className=""
              color="foreground"
              href="./contract"
            >
              Example Contract
            </Link>
          </Button>
      <div className="prose px-2">
          
          <ReadmeContent />
        </div>
        </div>
      </div>
    </>
  );
}