'use client'

import { useParams } from "next/navigation"

export default function MealsDetailPage(){

    const params = useParams();

    console.log(params)
    return(
        <h1>
            Meals Detail
        </h1>
    )
}