import React from "react";
import FormComponent from "../components/FormComponent";

export default function Signup() {
  return (
    <div className=" px-10  w-screen h-screen bg-[color:var(--Red)] bg-hero-pattern">
      <main className="grid grid-cols-2 content-center h-screen ">
        <section className="bg-blue-400">
          <h1>Learn to code by watching others</h1>
          <p>
            See how exeprienced developers solve problems in real-time. Watching
            scripted is great, but understanding how developers think is
            invaluable.
          </p>
        </section>
        <section className="bg-red-400">
          <button className="px-10 py-3">
            Try it free 7 days then $20-mo. thereafter
          </button>
          <FormComponent />
        </section>
      </main>
    </div>
  );
}
