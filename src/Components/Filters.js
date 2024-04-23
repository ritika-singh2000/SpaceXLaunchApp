import React, { useState } from "react";

const Filters = ({
  launchStatus,
  setLaunchStatus,
  sortByYear,
  setSortByYear,
  inputValue,
  setInputValue,
}) => {
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="flex flex-col sm:flex-row gap-4 bg-fuchsia-300  p-4 text-white font-medium text-xl items-center">
      <div className="w-full sm:w-3/4">
        <input
          type="text"
          id="myInput"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Search for Mission Name..."
          className="rounded-md px-2 py-1 w-full flex-1 text-black"
        />
      </div>
      <div className="flex flex-row gap-2 items-center">
        <p>Sort By: </p>
        <button
          className={`bg-white text-fuchsia-300 px-1 py-1 rounded-xl border-2 ${
            sortByYear ? "  border-fuchsia-500 " : "border-fuchsia-300"
          }`}
          onClick={() => {
            setSortByYear((prev) => !prev);
          }}
        >
          Launch Year
        </button>
        <button
          className={`bg-white text-fuchsia-300 px-1 py-1 rounded-xl  border-2 ${
            launchStatus ? " border-fuchsia-500 " : "border-fuchsia-300 "
          }`}
          onClick={() => {
            setLaunchStatus((prev) => !prev);
          }}
        >
          Launch Status
        </button>
      </div>
    </div>
  );
};

export default Filters;
