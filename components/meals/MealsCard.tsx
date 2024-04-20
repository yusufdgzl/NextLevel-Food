import Image from "next/image";
import { Meals } from "./MealsGridSection";
import Link from "next/link";

export default function MealsCard({ items }: { items: Meals }) {
  const image = items?.image;

  return (
    <div className="flex flex-col max-w-[400px] rounded-ss-3xl rounded-ee-3xl bg-[#1c0e1a]   overflow-hidden group">
      <div className="w-[400px] h-[300px] overflow-hidden">
        {typeof image === "string" && (
          <Image
            className="  rounded-ss-3xl h-full group-hover:scale-110 group-hover:contrast-[1.1] group-hover:brightness-110 duration-300 "
            src={image}
            width={400}
            height={300}
            alt="Pizza Image"
          />
        )}
      </div>

      <div className="p-4 text-white tracking-wider  ">
        <h2 className="text-2xl font-jule tracking-widest">{items.title}</h2>
        <p className="text-xs text-yellow-800 italic">{items.name}</p>
        <h3 className=" leading-5 opacity-50 mt-5 text-[15px] font-thin">
          {items.shortSummary}
        </h3>
        <Link href={`/meals/${items.title}`}>
          <button className="bg-gradient-to-r shadow-md  from-pink-900 to-pink-500 text-lg font-semibold w-full mt-6 py-2 rounded-lg hover:bg-gradient-to-l hover:-translate-y-0.5 transition-all hover: duration-300 hover:shadow-white ease-in-out ">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}
