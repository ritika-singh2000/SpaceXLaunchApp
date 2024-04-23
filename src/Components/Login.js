import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleLogin = () => {
    const payload = users.find(
      (user) => user.username === username && user.password === password
    );
    if (payload) {
      dispatch({
        type: "LOG_IN",
        payload,
      });
    } else {
      alert("Wrong Credentials");
    }
  };

  return (
    <div className="flex flex-col p-1 items-center mt-12 mx-auto w-2/3 lg:w-1/3 bg-white bg-opacity-40 border-2 border-white rounded-xl text-white">
      <div className="text-bold font-bold self-center text-3xl">Log In</div>
      <div className="flex flex-wrap w-full gap-2 p-2 items-center mt-4 my-2">
        <h2 className="font-medium text-2xl ">Username:</h2>
        <input
          type="text"
          placeholder="Enter Username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="flex-1 rounded p-2 text-slate-700"
        />
      </div>
      <div className="flex flex-wrap w-full gap-2 p-2 items-center my-4">
        <h2 className="font-medium text-2xl ">Password :</h2>
        <input
          type="password"
          placeholder="Enter Password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="flex-1 rounded p-2 text-slate-700"
        />
      </div>
      <button
        onClick={handleLogin}
        className="p-2 border-2 mb-3 border-white w-max text-xl font-medium self-center rounded-xl"
      >
        Log In
      </button>
    </div>
  );
};

export default Login;
