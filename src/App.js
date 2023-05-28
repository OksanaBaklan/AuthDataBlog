/** @format */

import { Route, Routes } from "react-router-dom";
import "./App.css";

import Layer from "./Components/Layout";
import { Login } from "./Components/Login";

import NotFound from "./Components/NotFound";
import Signin from "./Components/Signin.jsx";

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
