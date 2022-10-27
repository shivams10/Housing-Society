import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <h1 className="head">Login Page</h1>
      <div>
        <span>
          Don't have an account?
          <Link to="/signup">Create new account</Link>
        </span>
      </div>
      <span className="back">
        Go back
        <Link to="/">Home</Link>
      </span>
    </>
  );
};

export default Login;
