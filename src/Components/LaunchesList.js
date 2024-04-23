import React, { useState, useEffect } from "react";
import LaunchCard from "./LaunchCard";

const LaunchesList = () => {
  const [launchesList, setLaunchesList] = useState([]);
  const fetchDetails = async () => {
    const data = await fetch("https://api.spacexdata.com/v3/launches");
    const json = await data.json();
    setLaunchesList(json);
    console.log(json);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  console.log("launchesList", launchesList);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center">
      {launchesList.map((launch, ind) => {
        return <LaunchCard data={launch} key={ind} />;
      })}
    </div>
  );
};

export default LaunchesList;
