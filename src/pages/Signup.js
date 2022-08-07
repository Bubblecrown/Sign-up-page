import React from "react";
import FormComponent from "../components/FormComponent";

export default function Signup() {
  return (
    <div className="box-border px-48 w-screen h-screen bg-[color:var(--Red)] bg-hero-pattern bg-no-repeat font-font">
      <main className=" grid grid-cols-2 content-center h-screen">
        <section className=" text-white flex flex-col justify-center">
          <h1 className=" text-5xl font-semibold mb-8">
            Learn to code by watching others
          </h1>
          <p className="text-base w-11/12">
            See how exeprienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </section>
        <section >
          <button className="px-10 py-3 bg-[color:var(--Blue)] text-white  w-full rounded-lg shadow-custom-shadow mb-6">
            Try it free 7 days then $20-mo. thereafter
          </button>
          <FormComponent />
        </section>
      </main>
    </div>
  );
}
