"use client";

import { createNewMeal } from "@/components/util/http";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { FormEvent, MouseEvent, useRef } from "react";

export default function SharePage() {
  const router = useRouter();

  const { mutate } = useMutation({
    mutationFn: createNewMeal,
    onSuccess: () => {
      router.push("../meals");
    },
  });

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const shortSummaryRef = useRef<HTMLInputElement>(null);
  const instructionsRef = useRef<HTMLTextAreaElement>(null);

  function submitHandler(event: FormEvent) {
    event.preventDefault();
    const enteredName = nameRef.current!.value;
    const enteredEmail = emailRef.current!.value;
    const enteredTitle = titleRef.current!.value;
    const enteredShortSummary = shortSummaryRef.current!.value;
    const enteredInstructions = instructionsRef.current!.value;

    const enteredData = {
      name: enteredName,
      email: enteredEmail,
      title: enteredTitle,
      shortSummary: enteredShortSummary,
      instructions: enteredInstructions,
    };

    mutate({ formData: enteredData });
  };

  //TODO: image pickerrrrrrrrrrrrrr//

  function pickImageHandler(event:MouseEvent<HTMLButtonElement>){
    event.preventDefault();
  }


  return (
    <>
      <div className="flex flex-col items-center md:items-start text-white space-y-6 py-6 px-6 md:px-36">
        <h1 className="flex text-3xl font-bold justify-center md:justify-start md:text-5xl">
          Share your <p className="px-2 text-pink-700">favorite meal</p>
        </h1>
        <h2 className="text-center md:text-left text-lg md:text-2xl">
          Or any other meal you feel needs sharing!
        </h2>
      </div>
      <form
        onSubmit={submitHandler}
        className=" flex flex-col  px-6 py-10 md:px-0 space-y-4  md:pl-36 max-w-[900px]"
      >
        <div className="flex space-x-4 ">
          <div className="flex flex-col w-full space-y-2">
            <label className="text-gray-400 font-semibold" htmlFor="name">
              YOUR NAME
            </label>
            <input
              className="input"
              type="text"
              id="name"
              name="name"
              ref={nameRef}
            />
          </div>
          <div className="flex flex-col w-full space-y-2">
            <label className="text-gray-400 font-semibold" htmlFor="email">
              YOUR EMAIL
            </label>
            <input
              className="input"
              type="email"
              id="email"
              name="email"
              ref={emailRef}
            />
          </div>
        </div>

        <div className="flex flex-col w-full space-y-2">
          <label className="text-gray-400 font-semibold" htmlFor="title">
            TITLE
          </label>
          <input
            className="input"
            type="text"
            id="title"
            name="title"
            ref={titleRef}
          />
        </div>

        <div className="flex flex-col w-full space-y-2">
          <label className="text-gray-400 font-semibold" htmlFor="shortSummary">
            SHORT SUMMARY
          </label>
          <input
            ref={shortSummaryRef}
            className="input"
            type="text"
            id="shortSummary"
            name="shortSummary"
          />
        </div>

        <div className="flex flex-col w-full space-y-2">
          <label className="text-gray-400 font-semibold" htmlFor="instructions">
            INSTRUCTIONS
          </label>
          <textarea
            ref={instructionsRef}
            className="input h-40 "
            id="instructions"
            name="instructions"
          />
        </div>

        <div className="flex flex-col  w-full space-y-2">
          <p className="text-gray-400 font-semibold">YOUR IMAGE</p>
          <div className="flex space-x-6">
            <div className=" border p-10 w-40">
              <p className=" text-gray-400">No image picked yet.</p>
            </div>
            <button onClick={pickImageHandler} className=" bg-slate-300 h-8 px-6 ">Pick an image</button>
          </div>
        </div>

        <div className="w-full flex justify-end">
          <button className="w-full md:w-[200px] rounded-md border text-pink-600 border-pink-600 hover:bg-pink-600 hover:text-white transition-colors duration-300  py-2">
            Share Meal
          </button>
        </div>
      </form>
    </>
  );
}
