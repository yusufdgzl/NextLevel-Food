"use client";

import logoImg from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function MainHeader() {
  const pathName = usePathname();
  const activeClass = "text-pink-500 [text-shadow:_0_0_15px_pink]";

  return (
    <header className="flex flex-col space-y-6 relative overflow-hidden bg-[url('/header-bg-black-pink.jpg')] bg-cover  md:bg-center justify-between items-center md:px-36 py-8 pb-20 md:space-y-0 md:flex-row font-bold text-white tracking-wider ">
      <span className="absolute  bottom-5 md:-bottom-1 -left-5 w-full md:w-2/5 h-[6px] bg-gray-900 rotate-12"></span>
      <span className="absolute bottom-5 md:-bottom-1 -left-5 w-full md:w-2/5 h-[5px] bg-gray-900 translate-y-5 rotate-12"></span>
      <span className="absolute bottom-5 md:-bottom-1 -left-5 w-full md:w-2/5 h-[4px] bg-gray-900 translate-y-10 rotate-12"></span>

      <div>
        <Link className="text-2xl flex  items-center  space-x-6" href="/">
          <Image
            src="/main-logo.jpg"
            width={100}
            height={100}
            className="rounded-3xl hover:brightness-125 duration-150"
            alt="Main logo"
          />
          <p className=" font-lobster text-4xl tracking-wider font-thin"> NEXTLEVEL FOOD</p>
        </Link>
      </div>
      <nav className=" space-x-10  text-lg  md:text-xl font-semibold">
        <Link
          className={` hover:text-pink-500 hover:[text-shadow:_0_0_15px_pink]   px-3 py-1 rounded-full ${
            pathName === "/meals" && activeClass
          } `}
          href="/meals"
        >
          Browse Meals
        </Link>
        <Link
          className={` hover:text-pink-500 hover:[text-shadow:_0_0_15px_pink]   px-3 py-1 rounded-full ${
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
