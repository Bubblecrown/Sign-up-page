import React from "react";

export default function FormComponent() {
  return (
    <div>
      <form className="py-9 px-10 bg-white rounded-lg shadow-custom-shadow">
        <div>
          <input type="text" placeholder="First Name" />
          <small>First Name cannot be empty</small>
        </div>
        <div>
          <input type="text" placeholder="Last Name" />
          <small>Last Name cannot be empty</small>
        </div>
        <div>
          <input type="text" placeholder="Email Address" />
          <small>Looks like this is not an email</small>
        </div>
        <div>
          <input type="text" placeholder="Password" />
          <small>Password cannot be empty</small>
        </div>
        <button
          type="submit"
          className="w-full bg-[color:var(--Green)] px-10 py-4 shadow-submit-shadow text-white rounded-md my-5
        "
        >
          CLAIM YOUR FREE TRIAL
        </button>
        <p className="text-[10px] text-center">
          By clicking the button, you are agreeing to our 
          <span>Terms and Services</span>
        </p>
      </form>
    </div>
  );
}
