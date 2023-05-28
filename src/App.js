/** @format */

import { Route, Routes } from "react-router-dom";
import "./App.css";

import Layer from "./Component/Layout";
import { Login } from "./Component/Login";

import NotFound from "./Component/NotFound";
import Signin from "./Component/Signin.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Layer />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
