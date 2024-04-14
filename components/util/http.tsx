"use client";

import { QueryClient } from "@tanstack/react-query";
import { Meals } from "../meals/MealsGridSection";

export const queryClient = new QueryClient();

export default async function getMeals() {
  const response = await fetch("/api");

  if (!response.ok) {
    throw new Error("An error occur during getMeals function");
  }

  const meals = await response.json();

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

  return form
}
