/** @format */

import React, { useState, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export const Login = () => {
  const [data, setData] = useState({
    userName: "john doe",
    password: "12345",
    identical: false,
    showError: false,
  });

  const { userName, password, identical, showError } = data;

  const navigate = useNavigate();

  const handleChange = () => {
    inputUsername.current.value === userName &&
      inputPassword.current.value === password &&
      setData({ ...data, identical: true });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    identical ? navigate("/home") : setData({ ...data, showError: true });
    inputUsername.current.value = "";
    inputPassword.current.value = "";
  };

  const inputUsername = useRef();
  const inputPassword = useRef();


  return (
    <>
      <h1>Login</h1>
      <p style={{ display: showError ? "block" : "none" }}>
        The username or password is incorrect!
      </p>{" "}
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="userName"
          placeholder="Username"
          ref={inputUsername}
        />


        <input
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="Password"
          ref={inputPassword}
        />

        <input type="submit" value="Submit" />
      </form>
      <p className="mb-3 text-sm">
        Have not an account? <br />

        <NavLink to="/signin" className="link" > Sign In</NavLink>

      </p>
    </>
  );
};
