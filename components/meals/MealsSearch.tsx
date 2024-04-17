"use client";

import { ChangeEvent, useState } from "react";
import SearchIcons from "../ui/icons/SearchIcons";
import { useQuery } from "@tanstack/react-query";
import { getMeals } from "../util/http";

type MealsSearchProps = {
  setEnteredSearchTerm: (prev: string) => void;
};

export default function MealsSearch({
  setEnteredSearchTerm,
}: MealsSearchProps) {
  function changeHandler(event: ChangeEvent<HTMLInputElement>) {
    setEnteredSearchTerm(event.target.value);
  }

  return (
    <>
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
    </>
  );
}
