'use client'

import { useQuery } from "@tanstack/react-query"
import getMeals from "../util/http"

export default function MealsSection(){

    const {data} = useQuery({
        queryKey: ['meals'],
        queryFn: getMeals
    })
    console.log(data)

    return(
        <div>
            <h1>
                Meals Section
            </h1>
        </div>
    )
}