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


export  async function getMeal({title}:{title: string | string[]}){
    const response = await fetch(`/api/${title}`)

    if(!response.ok){
        throw new Error('An error occur during getMeal function')
    }

    const meal = await response.json();

    return meal

}