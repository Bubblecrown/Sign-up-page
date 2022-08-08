import React from "react";
import errorIcon from "../assets/icon-error.svg";
import { Formik } from "formik";

export default function FormComponent() {
  const formValidation = ({ handleChange, handleSubmit, values }) => {
    return (
      <form
        className="py-9 px-10 bg-white rounded-lg shadow-custom-shadow"
        onSubmit={handleSubmit}
      >
        <div className="form-controls">
          <div className="relative flex items-center justify-end ">
            <img src={errorIcon} alt="Error Icon" className="absolute mr-5" />
            <input
              type="text"
              placeholder="First Name"
              aria-label="First Name Field"
              id="firstName"
              name="firstName"
              onChange={handleChange}
              value={values.firstName}
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
              id="lastName"
              name="lastName"
              onChange={handleChange}
              value={values.lastName}
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
              id="email"
              name="email"
              onChange={handleChange}
              value={values.email}
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
              id="password"
              name="password"
              onChange={handleChange}
              value={values.password}
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
    );
  };

  return (
    <div>
      <Formik
        onSubmit={(values, { setSubmitting }) => {
          alert(JSON.stringify(values));
        }}
        initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
      >
        {(props) => formValidation(props)}
      </Formik>
    </div>
  );
}
