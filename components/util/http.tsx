"use client";

import { QueryClient } from "@tanstack/react-query";
import { Meals } from "../meals/MealsGridSection";

export const queryClient = new QueryClient();

export async function getMeals({ searchData }: { searchData: string | undefined}) {
  const response = await fetch("/api");

  if (!response.ok) {
    throw new Error("An error occur during getMeals function");
  }

  let meals: Meals[] = await response.json();

  if (searchData !== undefined) {
    meals = meals.filter((item) => {
      const searchableText = `${item.title} ${item.name}`;
      return searchableText.toLowerCase().includes(searchData.toLowerCase());
    });
  }
  return meals;
}

export async function getMeal({ title }: { title: string | string[] }) {
  const response = await fetch(`/api/${title}`);

  if (!response.ok) {
    throw new Error("An error occur during getMeal function");
  }

  const meal = await response.json();

  return meal;
}

export async function createNewMeal({ formData }: { formData: Meals }) {
  const { email, image, instructions, name, shortSummary, title } = formData;

  if (
    email === "" ||
    image === null ||
    instructions === "" ||
    name === "" ||
    shortSummary === "" ||
    title === ""
  ) {
    throw new Error(
      "Information is missing or incorrect ,please check all fields!"
    );
  }

  const response = await fetch("/api", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed process of create new Meal!");
  }

  const form = response.json();

  return form;
}
