import Image from "next/image";
import mealsIcon from "@/assets/icons/meal.png";
import communityIcon from "@/assets/icons/community.png";
import eventsIcon from "@/assets/icons/events.png";

export default function Community() {
  return (
    <div className="flex flex-col space-y-10 items-center justify-center  text-white">
      <div className="flex flex-col space-y-8 py-4 tracking-widest items-center">
        <h1 className="flex text-3xl md:text-5xl font-bold ">
          One shared passion:<p className="px-3 text-pink-700">Food</p>
        </h1>
        <h2 className="text-md md:text-xl ">
          Join our community and share your favorite recipes!
        </h2>
      </div>
      <div className="flex flex-col w-full items-center justify-center text-center space-y-8 py-8  ">
        <h2 className="text-2xl md:text-4xl font-semibold">Community Perks</h2>
        <div className=" flex flex-col w-full md:pl-10 md:max-w-[1000px] items-center space-y-6 md:flex-row md:space-y-0 md:justify-between  ">
          <div className="flex flex-col justify-center items-center space-y-6 max-w-[300px] md:translate-y-40 transition-transform duration-1000">
            <Image src={mealsIcon} width={100} height={100} alt="Meals Icon" />
            <p className="text-lg md:text-2xl font-semibold">Share & discover recipes</p>
          </div>
          <div className="flex flex-col justify-center items-center space-y-6 max-w-[300px] ">
            <Image
              src={communityIcon}
              width={100}
              height={100}
              alt="Meals Icon"
            />
            <p className="text-lg md:text-2xl font-semibold">
              Find new friends & like-minded people
            </p>
          </div> 
          <div className="flex flex-col md:py-20  justify-center items-center space-y-6 max-w-[300px] md:translate-y-60 transition-transform duration-1000">
            <Image src={eventsIcon} width={100} height={100} alt="Meals Icon" />
            <p className="text-lg md:text-2xl font-semibold">
              Participate in exclusive events
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
