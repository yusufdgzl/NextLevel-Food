'use client'

import MealsHeader from "@/components/meals/MealsHeader"
import MealsSection from "@/components/meals/MealsGridSection";
import { useState } from "react";

export default function Meals() {

  const [enteredSearchTerm, setEnteredSearchTerm] = useState<string>();

    return (
      <div>
        <MealsHeader setEnteredSearchTerm={setEnteredSearchTerm}/>
        <MealsSection enteredSearchTerm={enteredSearchTerm}/>
      </div>
    );
  }
  