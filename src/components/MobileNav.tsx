"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { ChevronDown, ChevronUp, Menu } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
// import { Icons } from "./icons";
import { siteConfig } from "@/lib/siteConfig";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { cn } from "@/lib/utils";
import { appsDetails, appsDetailsType } from "@/lib/appsDetails";

export function MobileNav() {
  const [open, setOpen] = useState<boolean>(false);
  const [appOpen, setAppOpen] = useState<boolean>(false)

  return (
    <Sheet open={open} onOpenChange={setOpen} >
      <SheetTrigger asChild>
        <Button variant="outline" className="w-10 px-0 sm:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Theme</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className=" w-60 text-xl">
        <MobileLink
          onOpenChange={setOpen}
          href="/"
          className="flex items-center justify-left text-red-600"

        >
          {/* <FaCloudSun className="mr-2 h-6 w-6" /> */}
          <div className="mr-1 items-center justify-center " >

            <IoHomeOutline />
          </div>
          <span className="font-bold text-2xl    font-mono">{siteConfig.name}  </span>
          
        </MobileLink>

        <div className="my-2 bg-gray-300 dark:bg-slate-600 w-full h-[1.5px] rounded-full" />

        <div className="flex flex-col gap-3 mt-3 text-lg">
          <MobileLink onOpenChange={setOpen}
            href="/prescripdraw">
            <Button >

              Write your Prescription

            </Button>
          </MobileLink>
          <MobileLink onOpenChange={setOpen}
            href="/prescripimg">
            <Button className="">

              Scan Prescription Image

            </Button>
          </MobileLink>


          <div className="my-2 bg-gray-300 dark:bg-slate-600 w-full h-[1.5px] rounded-full" />


          {/* apps */}
          <div>
            <Collapsible open={appOpen} onOpenChange={setAppOpen} className="w-full space-y-2">
              <CollapsibleTrigger asChild>
                <Button variant="default" className="w-full h-8 hover:text-blue-700 hover:bg-gray-400 flex justify-between">
                  <div>Apps Made</div>
                  {appOpen ?
                    <div>
                      <ChevronUp className="h-4 w-4" />
                      <span className="sr-only">Apps </span>
                    </div> :
                    <div>
                      <ChevronDown className="h-4 w-4" />
                      <span className="sr-only">Apps </span>
                    </div>
                  }

                </Button>
              </CollapsibleTrigger>

              <CollapsibleContent className={cn("space-y-3 w-auto bg-gray-200 dark:bg-gray-700 rounded-lg flex flex-col",
                appOpen ? " p-[6px] " : ""
              )}>
                {appsDetails.map((item: appsDetailsType, index: number) => (
                  <Link
                    onClick={() => { setOpen(false) }}
                    // href={'https://huggingface.co/spaces/Maksudul/prescribtion-reader'}
                    href={item.link}
                    key={item.title}
                    target={item.target}
                    rel={item.rel}
                    className="rounded-lg border border-gray-400 p-[6px]  font-mono text-xs font-bold"
                  >
                    {index + 1}. {item.title}
                  </Link>
                ))}

              </CollapsibleContent>
            </Collapsible>
          </div>

          <div className="my-2 bg-gray-300 dark:bg-slate-600 w-full h-[1.5px] rounded-full" />

          <div className="flex items-center justify-center gap-6 ">
            <Link target="_blank" rel="noreferrer"
              href={siteConfig.links.github}
            >
              <FaGithub className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.twitter}
            >
              <FaSquareXTwitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  className?: string;
  target?: string;
  rel?: string
}

function MobileLink({ href, onOpenChange, children, className, ...props }: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={className}
      {...props}
      target={props.target}
      rel={props.rel}
    >
      {children}
    </Link>
  );
}
