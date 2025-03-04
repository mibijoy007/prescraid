// import { Button } from "@/components/ui/button";
// import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
// import { siteConfig } from "@/lib/siteConfig";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:mt-10 lg:py-32">
      <div className="container flex flex-col gap-4 text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-balance">
          Hello, Welcome to <span className="text-blue-500">PrescrAid</span>
        </h1>
        {/* max-w-[42rem] */}
        <p className="max-w-[60rem] mx-auto text-muted-foreground sm:text-xl text-balance">
          Best solution for your prescription writting app where you can write and get help from Ai to 
          organize it properly with all the necessary data along with prescription image scanning functionalities
         </p>
        <div className="flex flex-col gap-4 justify-center sm:flex-row">
          <Link
            href="/prescripdraw"
            className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-fit")}
          >
             Write a Prescription
          </Link>
          <Link
            href="/prescripimg"
            // target="_blank"
            // rel="noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "w-full sm:w-fit border-[4px]"
            )}
          >
            Scan Prescription Image
          </Link>
        </div>
      </div>
    </section>
   
  </>
  );
}
