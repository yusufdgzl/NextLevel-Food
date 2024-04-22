"use client";

import { getMeal } from "@/components/util/http";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

import Image from "next/image";
import { Meals } from "@/components/meals/MealsGridSection";
import LoadingIndicator from "@/components/ui/LoadingIndicator";

export default function MealsDetailPage() {
  const params = useParams();

  const { data, isPending, isError, error } = useQuery<Meals>({
    queryKey: ["meals", params?.detail],
    queryFn: () => getMeal({ title: params.detail }),
  });

  let content;

  if (isPending) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = (
      <ul className="text-red-500 text-center text-3xl animate-pulse">
        <p>{error.message}</p>
      </ul>
    );
  }

  if (data) {
    content = (
      <div className="flex flex-col items-center justify-center md:px-32 space-y-4 md:space-y-10 p-6 md:py-20">
        <div
          className={`flex flex-col items-center transition-all md:flex-row ${
            data ? "translate-x-0" : "translate-x-10"
          }  `}
        >
          {typeof data.image === "string" && (
            <Image
              className="w-[400px] h-[350px] md:w-[500px] md:h-[400px]"
              src={data.image}
              width={800}
              height={800}
              alt="Pizza Image"
            />
          )}
          <div className=" py-6 space-y-4 text-center max-w-[700px] text-white md:text-left md:p-14">
            <h1 className="text-3xl font-bold font-jule md:text-5xl">{data.title}</h1>
            <h2 className="flex font-jule justify-center text-xl md:text-2xl md:justify-start ">
              by <p className="text-pink-700 font-serif px-1">{data.name}</p>
            </h2>
            <h2 className="text-lg font-jule md:text-2xl">{data.shortSummary}</h2>
          </div>
        </div>
        <div className="relative  max-w-[1000px]  ">
          <h2 className="absolute font-jule top-0 right-0 left-0 md:left-auto md:-right-4 -translate-y-4 px-4 py-1 rounded-md text-center text-2xl  bg-pink-800   text-white ">
            My Recipe
          </h2>
          <pre className=" bg-[#9f8c7a] italic text-md md:text-xl max-w-sm md:max-w-max flex py-8 px-4 font-[500] overflow-auto font-inter leading-8 md:leading-10 rounded-xl ">
            {data.instructions}
          </pre>
        </div>
      </div>
    );
  }

  return content;
}
