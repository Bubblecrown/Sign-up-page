import React from "react";
import FormComponent from "../components/FormComponent";

export default function Signup() {
  return (
    <div className=" lg:px-52 sm:px-16 s:px-16 s:py-16 w-screen h-full bg-[color:var(--Red)] lg:bg-hero-pattern lg:bg-no-repeat sm:h-screen  lg:py-0 bg-auto bg-center font-font md:py-20 md:bg-hero-pattern-mobile">
      <main className="grid lg:grid-cols-2 lg:h-screen sm:h-full items-center sm:grid-cols-1 ">
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
