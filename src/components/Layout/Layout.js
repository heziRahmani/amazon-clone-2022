import { Outlet } from "react-router-dom";
import React from "react";
import Header from "../header/Header";

export default function Layout() {
  return (
    <div className='layout-container'>
      {/* header */}
      <Header />
      {/* body */}
      <Outlet />
    </div>
  );
}
