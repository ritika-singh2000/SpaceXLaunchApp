import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LaunchesList from "./LaunchesList";
import Signup from "./SignUp";
import Login from "./Login";
import { useSelector } from "react-redux";

const DisplayPages = () => {
  const currentState = useSelector((state) => state.currentState);

  return (
    <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-screen w-screen relative">
      <div className="flex flex-col  ">
        <div className="self-center text-5xl my-3 font-bold text-white">
          SpaceX Launches
        </div>
      </div>
      {currentState == "SIGN_UP" && <Signup />}
      {currentState == "LOG_IN" && <Login />}
      {currentState == "AUTHENTICATED" && <LaunchesList />}
    </div>
  );
};

export default DisplayPages;
