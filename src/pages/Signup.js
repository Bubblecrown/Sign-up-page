import React from "react";
import FormComponent from "../components/FormComponent";

export default function Signup() {
  return (
    <div className="px-10 py-10 xl:px-40 lg:px-10 sm:px-16 xl:py-0 lg:py-10 md:py-20 s:py-16 w-full h-full lg:h-full md:h-full md:min-h-screen bg-[color:var(--Red)] lg:bg-hero-pattern lg:bg-no-repeat bg-center font-font s:bg-hero-pattern-mobile s:bg-repeat-y md:text-left text-center">
      <main className="grid lg:grid-cols-2 sm:grid-cols-1 lg:h-screen sm:h-full content-center items-center  lg:gap-0 s:gap-5 ">
        <section className=" text-white flex flex-col ">
          <h1 className=" text-5xl font-semibold mb-8">
            Learn to code by watching others
          </h1>
          <p className="text-base w-11/12">
            See how exeprienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </section>
        <section className="w-full">
          <button className="px-10 py-4 bg-[color:var(--Blue)] text-white  w-full rounded-lg shadow-custom-shadow mb-6">
            Try it free 7 days then $20-mo. thereafter
          </button>
          <FormComponent />
        </section>
      </main>
    </div>
  );
}
