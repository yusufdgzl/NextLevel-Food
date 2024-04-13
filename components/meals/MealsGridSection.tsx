"use client";

import { useQuery } from "@tanstack/react-query";
import getMeals from "../util/http";

import MealsCard from "./MealsCard";

export type Meals = {
  name: string;
  email: string;
  title: string;
  shortSummary: string;
  instructions: string;
  image: string;
};

export default function MealsSection() {
  const { data, isPending, isError, error } = useQuery<Meals[]>({
    queryKey: ["meals"],
    queryFn: getMeals,
  });
  console.log(data);

  return (
    <div className="grid p-6 md:grid-cols-2 place-items-center gap-5 md:gap-20 xl:grid-cols-3 xl:max-w-[1500px] mx-auto md:py-20">
      {data?.map((meal, index) => (
        <MealsCard key={index} items={meal} />
      ))}
    </div>
  );
}
