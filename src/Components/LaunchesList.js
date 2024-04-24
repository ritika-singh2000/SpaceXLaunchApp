import React, { useEffect, useState } from "react";
import LaunchCard from "./LaunchCard";
import "../Assests/CustomStyle.css";
import Filters from "./Filters";
import Loader from "./Loader";

const LaunchesList = () => {
  const [launchesList, setLaunchesList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [launchStatus, setLaunchStatus] = useState(false);
  const [sortByYear, setSortByYear] = useState(false);
  const [filteredData, setFilteredData] = useState(launchesList);
  const [showLoader, setShowLoader] = useState(true);
  const fetchDetails = async () => {
    setShowLoader(true);
    const data = await fetch("https://api.spacexdata.com/v3/launches");
    const json = await data.json();
    setLaunchesList(json);
    setFilteredData(json);
    setShowLoader(false);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  useEffect(() => {
    if (filteredData.length == 0) {
      setFilteredData(launchesList);
      return;
    }

    let data = launchesList.filter((launch) =>
      launch.mission_name.toLowerCase().includes(inputValue.toLowerCase())
    );

    if (sortByYear) {
      data.sort(
        (a, b) => new Date(b.launch_date_local) - new Date(a.launch_date_local)
      );
    }

    if (launchStatus) {
      data.sort((a, _) => {
        return a.launch_success ? -1 : 1;
      });
    }
    setFilteredData(data);
  }, [inputValue, launchStatus, sortByYear]);

  return (
    <div className="flex flex-col">
      {!showLoader ? (
        <div className="absolute inset-0 w-10/12 h-5/6 bg-white m-auto rounded-xl overflow-hidden">
          <div className="h-[40px] sticky top-0 mb-3">
            <Filters
              launchStatus={launchStatus}
              setLaunchStatus={setLaunchStatus}
              sortByYear={sortByYear}
              setSortByYear={setSortByYear}
              inputValue={inputValue}
              setInputValue={setInputValue}
            />
          </div>
          <div className="w-full h-full px-4 pb-16 pt-28 sm:pt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-start overflow-y-auto scroll-overflow">
            {filteredData.length > 0 ? (
              filteredData.map((launch, ind) => {
                return <LaunchCard data={launch} key={ind} />;
              })
            ) : (
              <p className="font-bold text-center text-xl items-center mt-3 text-violet-800 ">
                Sorry...No Data Available :(
              </p>
            )}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default LaunchesList;
