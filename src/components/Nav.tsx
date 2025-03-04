"use client";


// import { Icons } from "./icons";
import Link from "next/link";
// import { siteConfig } from "@/lib/siteConfig";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
// import { FaCloudSun } from "react-icons/fa";
// import { Button } from "@/components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"


// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  // navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { IoHomeOutline } from "react-icons/io5";

import React from "react";
import { appsDetails, appsDetailsType } from "@/lib/appsDetails";
import { Button } from "./ui/button";
import { siteConfig } from "@/lib/siteConfig";



export default function Nav() {

  const pathname = usePathname();

  return (
    <nav className="flex items-center sm:space-x-[4px] md:space-x-3 lg:space-x-6">
      <Link href="/" className="mr-6 ml-2 md:ml-8 flex items-center space-x-2 text-red-600 font-extrabold">
        {/* <FaCloudSun className=" h-8 w-8"/> */}
        {/* <span className="font-bold text-2xl sm:text-xl lg:text-3xl">Mi&apos;s</span> */}


        <IoHomeOutline className="text-2xl  "/>
       
        <div className="  text-2xl  md:text-3xl font-mono ">
    {siteConfig.name}
    </div>
     


      </Link>


      {/* <Link
        href="/"
        className={cn(
          " font-medium transition-colors hover:text-blue-500 hidden sm:inline-block ",
          pathname === "/" ? "text-foreground" : "text-foreground/60"
        )}
      >
        <div className="flex justify-center items-center gap-1">
        <IoHomeOutline/>
        <div>
          Home
          </div>
        </div>
      </Link> */}


      <Link
        href="/prescripdraw"
        className={cn(
          "text-sm font-medium transition-colors hover:text-blue-500 hidden sm:inline-block",
          pathname === "/prescripdraw" ? "text-foreground" : "text-foreground/60"
        )}
      >
       
       <Button className="m-0 p-0 px-1 md:px-2 h-9 w-[8rem] text-xs md:text-sm md:h-9 lg:h-10 md:w-full">
      
        Write a Prescription
     
        </Button>
      </Link>

      <Link
        href="/prescripimg"
        className={cn(
          "text-sm font-medium transition-colors hover:text-blue-500 hidden sm:inline-block",
          pathname === "/prescripimg" ? "text-foreground" : "text-foreground/60"
        )}
      >
        <Button className="m-0 p-0 md:px-3 h-9 w-[8rem] text-xs md:text-sm md:h-9 lg:h-10 md:w-full">
     
      Scan Prescription Img 
     
    </Button>
    
      </Link>

      <div className="hidden sm:inline-block">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="m-0 p-0 h-7 w-[6rem] text-xs md:text-sm md:h-9 md:w-32 border-2 border-gray-400 rounded-lg  hover:text-blue-500" >Other Apps </NavigationMenuTrigger>
              <NavigationMenuContent className=" dark:bg-slate-900">
                <ul className="grid w-[280px] md:w-[400px] gap-3 p-4 lg:grid-cols-2 lg:w-[550px] xl:w-[650px] ">
                  {appsDetails.map((component: appsDetailsType) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.link}
                      target={component.target}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {/* <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem> */}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

    </nav>
  );
}



const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none mb-3">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"



// export function NavigationMenuDemo() {
//   return (
//     <NavigationMenu>
//       <NavigationMenuList>
//         {/* <NavigationMenuItem>
//           <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
//           <NavigationMenuContent>
//             <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
//               <li className="row-span-3">
//                 <NavigationMenuLink asChild>
//                   <a
//                     className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
//                     href="/"
//                   >
//                     <Icons.logo className="h-6 w-6" />
//                     <div className="mb-2 mt-4 text-lg font-medium">
//                       shadcn/ui
//                     </div>
//                     <p className="text-sm leading-tight text-muted-foreground">
//                       Beautifully designed components that you can copy and
//                       paste into your apps. Accessible. Customizable. Open
//                       Source.
//                     </p>
//                   </a>
//                 </NavigationMenuLink>
//               </li>
//               <ListItem href="/docs" title="Introduction">
//                 Re-usable components built using Radix UI and Tailwind CSS.
//               </ListItem>
//               <ListItem href="/docs/installation" title="Installation">
//                 How to install dependencies and structure your app.
//               </ListItem>
//               <ListItem href="/docs/primitives/typography" title="Typography">
//                 Styles for headings, paragraphs, lists...etc
//               </ListItem>
//             </ul>
//           </NavigationMenuContent>
//         </NavigationMenuItem> */}

//         <NavigationMenuItem>
//           <NavigationMenuTrigger>Components</NavigationMenuTrigger>
//           <NavigationMenuContent>
//             <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
//               {components.map((component) => (
//                 <ListItem
//                   key={component.title}
//                   title={component.title}
//                   href={component.href}
//                 >
//                   {component.description}
//                 </ListItem>
//               ))}
//             </ul>
//           </NavigationMenuContent>
//         </NavigationMenuItem>
//         <NavigationMenuItem>
//           <Link href="/docs" legacyBehavior passHref>
//             <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//               Documentation
//             </NavigationMenuLink>
//           </Link>
//         </NavigationMenuItem>
//       </NavigationMenuList>
//     </NavigationMenu>
//   )
// }


{/* <div className="hidden sm:inline-block">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="default" className="w-auto px-16 h-8 hover:text-blue-700 hover:bg-gray-400">
              Apps
              <span className="sr-only">Apps</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem >
              <Link
                href={'https://huggingface.co/spaces/Maksudul/prescribtion-reader'}
                target="_blank"
                rel="noreferrer"
              >
                Prescribtion Analyzer
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem >
              Item 2
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div> */}