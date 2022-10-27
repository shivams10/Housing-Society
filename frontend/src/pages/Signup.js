import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <h1 className="head">SignUp Page</h1>
      <div>
        <span>
          Existing User?
          <Link to="/login">Login</Link>
        </span>
      </div>
      <span className="back">
        Go back <Link to="/">Home</Link>
      </span>
    </>
  );
};

export default Signup;
