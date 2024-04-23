import React from "react";

const Filters = () => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = () => {};
  return (
    <div className="flex flex-row gap-4 bg-fuchsia-300  p-4 text-white font-medium text-xl">
      <div className="w-3/4">
        <input
          type="text"
          id="myInput"
          value={inputValue}
          onChange={handleChange}
          placeholder="Search for Flight Number..."
          className="rounded-md px-2 py-1 w-full flex-1"
        />
      </div>
      <div className="flex flex-row justify-between">
        <button className="">Launch Year</button>
        <button>Launch Status</button>
      </div>
    </div>
  );
};

export default Filters;
