"use client";

import logoImg from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function MainHeader() {
  const pathName = usePathname();
  const activeClass = "text-yellow-500 [text-shadow:_0_0_15px_yellow]";

  return (
    <header className="flex flex-col space-y-6 relative bg-[url('https://images3.alphacoders.com/116/116517.jpg')] bg-center md:bg-cover justify-between items-center md:px-36 py-8 pb-20 md:space-y-0 md:flex-row font-bold text-white tracking-wider ">
      <div className="flex  items-center  space-x-6">
        <Image src={logoImg} className="w-20" alt="Main logo" />
        <Link className="text-2xl" href="/">
          NEXTLEVEL FOOD
        </Link>
      </div>
      <nav className=" space-x-10  text-lg  md:text-xl font-semibold">
        <Link
          className={` hover:text-yellow-500 hover:[text-shadow:_0_0_15px_yellow]   px-3 py-1 rounded-full ${
            pathName === "/meals" && activeClass
          } `}
          href="meals"
        >
          Browse Meals
        </Link>
        <Link
          className={` hover:text-yellow-500 hover:[text-shadow:_0_0_15px_yellow]   px-3 py-1 rounded-full ${
            pathName === "/community" && activeClass
          } `}
          href="/community"
        >
          Foodies Community
        </Link>
      </nav>
    </header>
  );
}

export default MainHeader;
