import React from "react";
import FormComponent from "../components/FormComponent";

export default function Signup() {
  return (
    <div className="px-10 py-10 xl:px-40 xl:py-0 lg:px-10 lg:py-10 sm:px-16   md:py-20 s:py-16 w-full h-full lg:h-full md:h-full md:min-h-screen bg-[color:var(--Red)] lg:bg-hero-pattern s:bg-hero-pattern-mobile lg:bg-no-repeat s:bg-repeat bg-center font-font md:text-left ss:text-center">
      <main className="grid lg:grid-cols-2 sm:grid-cols-1 lg:h-screen sm:h-full content-center items-center  lg:gap-0 ss:gap-5">
        <section className=" text-white flex flex-col md:items-start ss:items-center ">
          <h1 className="md:text-5xl s:text-3xl ss:text-xl ss:mb-4 font-semibold mb-8 ">
            Learn to code by watching others
          </h1>
          <p className="s:text-base w-11/12 ss:text-xs">
            See how exeprienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </section>
        <section className="w-full">
          <button className="s:px-10 s:py-4 bg-[color:var(--Blue)] text-white w-full rounded-lg shadow-custom-shadow ss:mb-6 ss:px-8 ss:py-2 s:text-base ss:text-xs">
            Try it free 7 days then $20-mo. thereafter
          </button>
          <FormComponent />
        </section>
      </main>
    </div>
  );
}
