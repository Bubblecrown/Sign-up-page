import React from "react";
import errorIcon from "../assets/icon-error.svg";
import { Formik } from "formik";
import * as Yup from "yup";

export default function FormComponent() {
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .required("First Name cannot be empty")
      .min(6, "First Name should be 6-20 chars.")
      .max(20, "First Name should be 6-20 chars."),
    lastName: Yup.string()
      .required("Last Name cannot be empty")
      .min(6, "Last Name should be 6-20 chars.")
      .max(20, "Last Name should be 6-20 chars."),
    email: Yup.string()
      .email("Looks like this is not an email")
      .required("Email cannot be empty"),
    password: Yup.string()
      .required("Password cannot be empty")
      .min(8, "Password should be 8-16 chars.")
      .max(16, "Password should be 8-16 chars.")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,
        "Password must Contain One Uppercase, One Lowercase and One Number."
      ),
  });
  const formValidation = ({
    handleChange,
    handleSubmit,
    values,
    isSubmitting,
    errors,
    touched,
  }) => {
    return (
      <form
        className="s:py-9 s:px-6 md:px-10 md:py-10 ss:py-6 ss:px-4 bg-white rounded-lg shadow-custom-shadow "
        onSubmit={handleSubmit}
      >
        <div className="form-controls">
          <div className="relative flex items-center justify-end ">
            {errors.firstName && touched.firstName ? (
              <img src={errorIcon} alt="Error Icon" className="icon-class" />
            ) : null}
            <input
              type="text"
              placeholder="First Name"
              aria-label="First Name Field"
              id="firstName"
              name="firstName"
              onChange={handleChange}
              value={values.firstName}
              className={
                errors.firstName && touched.firstName
                  ? "outline-red-400 outline-2"
                  : ""
              }
            />
          </div>
          {errors.firstName && touched.firstName ? (
            <small>{errors.firstName}</small>
          ) : null}
        </div>
        <div className="form-controls">
          <div className="relative flex items-center justify-end ">
            {errors.lastName && touched.lastName ? (
              <img src={errorIcon} alt="Error Icon" className="icon-class" />
            ) : null}
            <input
              type="text"
              placeholder="Last Name"
              aria-label="Last Name Field"
              id="lastName"
              name="lastName"
              onChange={handleChange}
              value={values.lastName}
              className={
                errors.lastName && touched.lastName
                  ? "outline-red-400 outline-2"
                  : ""
              }
            />
          </div>
          {errors.lastName && touched.lastName ? (
            <small>{errors.lastName}</small>
          ) : null}
        </div>
        <div className="form-controls">
          <div className="relative flex items-center justify-end ">
            {errors.email && touched.email ? (
              <img src={errorIcon} alt="Error Icon" className="icon-class" />
            ) : null}
            <input
              type="text"
              placeholder="Email Address"
              aria-label="Email Address Field"
              id="email"
              name="email"
              onChange={handleChange}
              value={values.email}
              className={
                errors.email && touched.email ? "outline-red-400 outline-2" : ""
              }
            />
          </div>
          {errors.email && touched.email ? <small>{errors.email}</small> : null}
        </div>
        <div className="form-controls">
          <div className="relative flex items-center justify-end ">
            {errors.password && touched.password ? (
              <img src={errorIcon} alt="Error Icon" className="icon-class" />
            ) : null}{" "}
            <input
              type="text"
              placeholder="Password"
              aria-label="Password Field"
              id="password"
              name="password"
              onChange={handleChange}
              value={values.password}
              className={
                errors.password && touched.password
                  ? "outline-red-400 outline-2"
                  : ""
              }
            />
          </div>
          {errors.password && touched.password ? (
            <small>{errors.password}</small>
          ) : null}
        </div>

        {/* 3D button */}
        <div>
          <button
            type="submit"
            className="w-full text-white rounded-md mb-5 mt-2 relative
        "
            value="Submit"
            disabled={isSubmitting}
          >
            <div className="absolute h-full bg-[#1e7f55] -bottom-1 border-[#1e7f55] border rounded-lg inset-x-0 px-10 "></div>
            <div className="relative xl:px-[151px] xl:py-4 lg:py-4 ss:px-4 ss:py-3  bg-[color:var(--Green)] rounded-lg transition transform duration-150 active:translate-y-1 s:text-sm ss:text-xs lg:text-base">
              CLAIM YOUR FREE TRIAL
            </div>
          </button>
        </div>
        {/* End 3D button */}

        <p className="s:text-[10px] ss:text-[6px] text-center">
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
          // alert(JSON.stringify(values));
          setTimeout(() => {
            setSubmitting(false);
          }, 2000);
        }}
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        }}
        validationSchema={SignupSchema}
      >
        {(props) => formValidation(props)}
      </Formik>
    </div>
  );
}
