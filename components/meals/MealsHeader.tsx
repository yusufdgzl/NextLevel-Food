import Link from "next/link";

function MealsHeader() {
  return (
    <div className="flex flex-col items-center md:items-start text-white space-y-6 py-6 px-6 md:px-36">
      <h1 className="flex text-2xl font-bold justify-center md:justify-start md:text-5xl">
        Delicious meals, created <p className="px-2 text-pink-700">by you</p>
      </h1>
      <h2 className="text-center md:text-left text-lg">Choose your favorite recipe and cook it yourself. It is easy and fun!</h2>
      <Link className="py-1 px-4 rounded-lg bg-pink-700 text-xl  " href="/">Share Your Favorite Recipe</Link>
    </div>
  );
}

export default MealsHeader;
