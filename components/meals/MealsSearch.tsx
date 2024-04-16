"use client";

import { ChangeEvent, useState } from "react";
import SearchIcons from "../ui/icons/SearchIcons";
import { useQuery } from "@tanstack/react-query";
import { getMeals, queryClient } from "../util/http";

export default function MealsSearch() {
  const [enteredSearchTerm, setEnteredSearchTerm] = useState<string>();

  const { data } = useQuery({
    queryKey: ["meals",enteredSearchTerm],
    queryFn:() => {
      return getMeals({ searchData: enteredSearchTerm! });
    },
  });

  function changeHandler(event: ChangeEvent<HTMLInputElement>) {
    setEnteredSearchTerm(event.target.value);
    console.log(enteredSearchTerm);
 console.log(data)
  }

  return (
    <div className="flex w-full px-4 relative md:min-w-[400px]  ">
      <div className="absolute  inset-y-0 items-center flex right-6 z-10 ">
        <SearchIcons />
      </div>

      <input
        className="input w-full  py-2 border-x-0 border-t-0 md:hover:w-[450px] md:focus:w-[450px] transition-all duration-300 ease-out  "
        placeholder="Search the recipes"
        type="text"
        id="search"
        name="search"
        onChange={changeHandler}
      />
    </div>
  );
}
