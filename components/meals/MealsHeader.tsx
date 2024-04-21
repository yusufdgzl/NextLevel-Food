import Link from "next/link";
import MealsSearch from "./MealsSearch";

type MealsHeaderProps = {
  setEnteredSearchTerm: (prev:string) => void;
}

function MealsHeader({setEnteredSearchTerm}:MealsHeaderProps) {
  return (
    <div className="flex flex-col items-center md:items-start text-white space-y-6 py-6 px-6 md:px-36">
      <div className="flex md:items-center md:w-full md:justify-between">
        <h1 className="flex text-2xl font-bold justify-center md:justify-start md:text-3xl xl:text-4xl 2xl:text-5xl">
          Delicious meals, created <strong className="px-2 text-pink-700">by you</strong>
        </h1>
        <div className=" hidden md:flex ">
          <MealsSearch setEnteredSearchTerm={setEnteredSearchTerm} />
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
      <div className="w-full md:hidden">
        <MealsSearch setEnteredSearchTerm={setEnteredSearchTerm}/>
      </div>
    </div>
  );
}

export default MealsHeader;
