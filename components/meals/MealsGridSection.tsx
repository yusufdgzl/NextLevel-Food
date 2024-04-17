"use client";

import { useQuery } from "@tanstack/react-query";
import { getMeals } from "../util/http";

import MealsCard from "./MealsCard";
import LoadingIndicator from "../ui/LoadingIndicator";
import { SelectedImage } from "@/app/meals/share/page";

export type Meals = {
  name: string;
  email: string;
  title: string;
  shortSummary: string;
  instructions: string;
  image: SelectedImage;
};

type MealsSectionProps = {
  enteredSearchTerm: string | undefined;
}

export default function MealsSection({enteredSearchTerm}:MealsSectionProps) {

  const { data, isPending, isError, error } = useQuery<Meals[]>({
    queryKey: ["meals",enteredSearchTerm],
    queryFn: () => getMeals({searchData:enteredSearchTerm}),
    staleTime: 5000,
  });

  console.log(data)

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
      <div className="grid p-6 md:grid-cols-2 place-items-center gap-5 md:gap-20 xl:grid-cols-3 xl:max-w-[1500px] mx-auto md:py-20">
        {data?.map((meal, index) => (
          <MealsCard key={index} items={meal} />
        ))}
      </div>
    );
  }

  return content;
}
