import Link from "next/link";

export default function Footer() {

  return (
    <footer className="bg-transparent py-4 px-2 md:px-6 text-[10px]  text-center border-t border-gray-600 text-xs sm:text-sm md:text-base sm:font-medium">
      <div className="flex justify-between  ">

        <p>© 2025 PrescrAid. All rights reserved. </p>

        <div className="md:mr-8">
          {/* Made with ♥ by  {" "} */}
          Made by  {" "}
          <Link href={'https://github.com/mibijoy007'} className="hover:underline text-blue-500 font-bold">
            Mibijoy
          </Link>
        </div>
      </div>
    </footer>
  )
}