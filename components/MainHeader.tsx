import logoImg from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

function MainHeader() {
  return (
    <header className="flex relative bg-[url('https://images3.alphacoders.com/116/116517.jpg')] bg-cover  justify-between items-center px-36 py-8 font-bold text-white tracking-wider">
      
      <div className="flex  items-center space-x-6">
        <Image src={logoImg} className="w-20" alt="Main logo" />
        <Link className="text-2xl" href="/">
          NEXTLEVEL FOOD
        </Link>
      </div>
      <nav className="space-x-10 text-xl font-semibold">
        <Link href="/">Browse Meals</Link>
        <Link href="/">Foodies Community</Link>
      </nav>
    </header>
  );
}

export default MainHeader;
