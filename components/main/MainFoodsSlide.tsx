"use client";

import Image from "next/image";
import burgerImg from "@/assets/burger.jpg";
import curryImg from "@/assets/curry.jpg";
import dumplingsImg from "@/assets/dumplings.jpg";
import macncheeseImg from "@/assets/macncheese.jpg";
import pizzaImg from "@/assets/pizza.jpg";

import tomatoSaladImg from "@/assets/tomato-salad.jpg";
import { useEffect, useState } from "react";

const allFoodsImage = [
  { image: burgerImg, alt: "A delicious, juicy burger" },
  { image: curryImg, alt: "A delicious, spicy curry" },
  { image: dumplingsImg, alt: "Steamed dumplings" },
  { image: macncheeseImg, alt: "Mac and cheese" },
  { image: pizzaImg, alt: "A delicious pizza" },
  { image: tomatoSaladImg, alt: "A delicious tomato salad" },
];

function FoodSlide() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setImageIndex((prev) => (prev < allFoodsImage.length - 1 ? prev + 1 : 0));
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className=" relative overflow-hidden w-[420px] h-[340px] md:w-[500px] md:h-[400px] rounded-xl">
      {allFoodsImage.map((item, index) => (
        <Image
          className={` absolute transition-all duration-500 ease-in-out  w-[420px] h-[340px] md:w-[500px] md:h-[400px] rounded-xl shadow-xl scale-105  ${
            index === imageIndex
              ? " opacity-100 scale-100 rotate-0 translate-x-0  "
              : "opacity-0 scale-110 -rotate-6 -translate-x-1"
          } `}
          src={item.image}
          key={index}
          width={800}
          height={800}
          alt="burger image"
        />
      ))}
    </div>
  );
}

export default FoodSlide;
