import React from "react";
import errorIcon from "../assets/icon-error.svg";
export default function FormComponent() {
  return (
    <div>
      <form className="py-9 px-10 bg-white rounded-lg shadow-custom-shadow">
        <div className="form-controls">
          <div className="relative flex items-center justify-end ">
            <img src={errorIcon} alt="Error Icon" className="absolute mr-5" />
            <input
              type="text"
              placeholder="First Name"
              aria-label="First Name Field"
            />
          </div>
          <small>First Name cannot be empty</small>
        </div>
        <div className="form-controls">
          <div className="relative flex items-center justify-end ">
            <img src={errorIcon} alt="Error Icon" className="absolute mr-5" />
            <input
              type="text"
              placeholder="Last Name"
              aria-label="Last Name Field"
            />
          </div>
          <small>Last Name cannot be empty</small>
        </div>
        <div className="form-controls">
          <div className="relative flex items-center justify-end ">
            <img src={errorIcon} alt="Error Icon" className="absolute mr-5" />
            <input
              type="text"
              placeholder="Email Address"
              aria-label="Email Address Field"
            />
          </div>
          <small>Looks like this is not an email</small>
        </div>
        <div className="form-controls">
          <div className="relative flex items-center justify-end ">
            <img src={errorIcon} alt="Error Icon" className="absolute mr-5" />
            <input
              type="text"
              placeholder="Password"
              aria-label="Password Field"
            />
          </div>
          <small>Password cannot be empty</small>
        </div>
        <button
          type="submit"
          className="w-full bg-[color:var(--Green)] px-10 py-4 shadow-submit-shadow text-white rounded-md mb-5 mt-2
        "
        >
          CLAIM YOUR FREE TRIAL
        </button>
        <p className="text-[10px] text-center">
          By clicking the button, you are agreeing to our&nbsp;
          <a
            href="/"
            className="text-[color:var(--Red)] font-bold hover:border-b-2 border-red-200"
          >
            Terms and Services
          </a>
        </p>
      </form>
    </div>
  );
}
