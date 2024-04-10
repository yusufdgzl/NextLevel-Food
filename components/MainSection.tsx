import Link from "next/link";
import burgerImg from "@/assets/burger.jpg";
import Image from "next/image";

function MainSection() {
  return (
    <div className="flex flex-col px-4 mt-10 space-y-10  md:mt-0 md:-translate-y-6 md:px-36">
      <div className="flex flex-col  space-y-6 items-center md:flex-row md:items-start md:justify-center md:space-y-0 md:space-x-6">
        <Image
          className="w-[420px] h-[340px] md:w-[500px] md:h-[400px] rounded-xl shadow-2xl"
          src={burgerImg}
          width={600}
          height={600}
          alt="burger image"
        />

        <div className="text-center space-y-5 px-6 md:text-start md:p-10 md:max-w-[500px] ">
          <h2 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-pink-800 text-3xl tracking-wide">
            NEXTLEVEL FOOD FOR NEXTLEVEL FOODIES
          </h2>
          <h3 className="text-white text-xl font-thin tracking-wider">
            Taste & share food from all over the world.
          </h3>
          <div className="flex items-center justify-center md:justify-start md:pt-6 space-x-6">
            <Link
              className="text-xl  text-pink-500 hover:text-pink-400"
              href="/community"
            >
              Join the Community
            </Link>
            <Link
              className="text-xl  font-semibold text-white bg-gradient-to-r from-pink-600 to-pink-400 hover:bg-gradient-to-l px-3 py-2 rounded-xl"
              href="meals"
            >
              Explore Meals
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-10 text-center space-y-10 md:flex-row md:space-y-0 md:space-x-10 md:justify-around md:pt-20">
        <div className="text-white shadow-[0_0_5px_0_pink] rounded-xl p-4 space-y-8 tracking-wider md:max-w-[600px]">
          <h2 className="text-2xl md:text-3xl font-semibold">How it works</h2>
          <p className="md:text-xl opacity-50">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It's a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p className="md:text-xl opacity-50">
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </div>
        <div className="text-white md:-translate-y-10 shadow-[0_0_5px_0_pink] rounded-xl p-4 space-y-8 tracking-wider md:max-w-[600px]">
          <h2 className="text-2xl md:text-3xl font-semibold">Why NextLevel Food?</h2>
          <p className="md:text-xl opacity-50">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It's a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p className="md:text-xl opacity-50">
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
