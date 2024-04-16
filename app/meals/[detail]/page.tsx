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
      <div className="flex flex-col items-center justify-center md:px-32 space-y-4 md:space-y-10 p-4">
        <div
          className={`flex flex-col items-center transition-all md:flex-row ${
            data ? "translate-x-0" : "translate-x-10"
          }  `}
        >
          {typeof data.image === "string" && (
            <Image
              className="w-[500px] h-[400px]"
              src={data.image}
              width={800}
              height={800}
              alt="Pizza Image"
            />
          )}
          <div className=" py-6 space-y-4 text-center max-w-[700px] text-white md:text-left md:p-14">
            <h1 className="text-3xl font-bold md:text-5xl">{data.title}</h1>
            <h2 className="flex justify-center text-xl md:text-2xl md:justify-start ">
              by <p className="text-pink-700 px-1">{data.name}</p>
            </h2>
            <h2 className="text-lg md:text-2xl">{data.shortSummary}</h2>
          </div>
        </div>
        <div className="max-w-[1000px] ">
          <pre className=" bg-[#9f8c7a] rounded-xl p-6">
            {data.instructions}
          </pre>
        </div>
      </div>
    );
  }

  return content;
}
