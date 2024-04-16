import Link from "next/link";
import MealsSearch from "./MealsSearch";

function MealsHeader() {
  return (
    <div className="flex flex-col items-center md:items-start text-white space-y-6 py-6 px-6 md:px-36">
      <div className="flex md:items-center md:w-full md:justify-between">
        <h1 className="flex text-2xl font-bold justify-center md:justify-start md:text-5xl">
          Delicious meals, created <p className="px-2 text-pink-700">by you</p>
        </h1>
        <div className="hidden md:flex">
          <MealsSearch />
        </div>
      </div>

      <h2 className="text-center md:text-left text-lg">
        Choose your favorite recipe and cook it yourself. It is easy and fun!
      </h2>
      <Link
        href="/meals/share"
        className="py-1 px-4 rounded-lg bg-pink-700 text-xl hover:bg-pink-600  "
      >
        Share Your Favorite Recipe
      </Link>
      <div className="md:hidden">
        <MealsSearch />
      </div>
    </div>
  );
}

export default MealsHeader;
