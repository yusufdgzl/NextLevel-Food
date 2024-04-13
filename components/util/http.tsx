'use client'

import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient()

export default async function getMeals(){
    const response = await fetch('/api');

    if(!response.ok){
        throw new Error('An error occur during getMeals function')
    }

    const meals = await response.json();

    return meals
}