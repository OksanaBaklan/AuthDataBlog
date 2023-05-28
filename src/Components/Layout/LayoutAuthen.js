/** @format */

import React from "react";
import { Outlet } from "react-router-dom";

const LayoutAuthen = () => {
  return (
    <div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default LayoutAuthen;
