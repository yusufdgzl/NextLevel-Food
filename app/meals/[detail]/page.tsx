'use client'

import { getMeal } from "@/components/util/http";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation"

export default function MealsDetailPage(){

    const params = useParams();

    const {data} = useQuery({
        queryKey:['meals', params?.detail],
        queryFn: () => getMeal({title:params.detail})
    })

    console.log(data)

    
    return(
        <h1>
            Meals Detail
        </h1>
    )
}