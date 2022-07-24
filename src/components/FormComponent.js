import React from "react";

export default function FormComponent() {
  return (
    <div className="container">
      <form className="form-validation">
        <div className="form-control">
          <input type="text" placeholder="First Name" />
          <small>First Name cannot be empty</small>
        </div>
        <div className="form-control">
          <input type="text" placeholder="Last Name" />
          <small>Last Name cannot be empty</small>
        </div>
        <div className="form-control">
          <input type="text" placeholder="Email Address" />
          <small>Looks like this is not an email</small>
        </div>
        <div className="form-control">
          <input type="text" placeholder="Password" />
          <small>Password cannot be empty</small>
        </div>
        <button type="submit">CLIAM YOUR FREE TRIAL</button>
        <p>
          By clicking the button, you are agreeing to our{" "}
          <span>Terms and Services</span>
        </p>
      </form>
    </div>
  );
}
