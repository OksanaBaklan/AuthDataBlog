/** @format */

import React, { useState, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Signin() {

  const inputUsername = useRef();
  const inputPassword = useRef();
  const againPassword = useRef()
  const inputEmail = useRef()
  return (
    <>
      <h1>Sing in</h1>
    
      <form >
        <input
          
          type="text"
          name="userName"
          placeholder="Username"
          ref={inputUsername}
        />
                <input
         
          type="email"
          name="email"
          placeholder="Email"
          ref={inputEmail}
        />
        <input
         
          type="password"
          name="password"
          placeholder="Password"
          ref={inputPassword}
        />
                <input
         
          type="password"
          name="password"
          placeholder="Password repeat"
          ref={againPassword}
        />

        <input type="submit" value="Submit" />
      </form>
      <p className="mb-3 text-sm">
        Already have  an account? <br />
        <NavLink to="/" className="link" >Log in</NavLink>

      </p>
    </>
  );
}
