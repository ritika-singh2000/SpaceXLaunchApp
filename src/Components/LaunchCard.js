import React from "react";
import { dateFormatter } from "../Utils";

const LaunchCard = ({ data }) => {
  console.log("data", data);
  return (
    <div className="border shadow-sm flex flex-col border-violet-500 w-full p-3 rounded-xl">
      <div className="flex flex-row gap-4 items-center">
        <img
          className="w-12 h-12"
          src={
            data.links.mission_patch === null
              ? "https://wallpapercave.com/wp/wp4053198.jpg"
              : data.links.mission_patch
          }
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://wallpapercave.com/wp/wp4053198.jpg"; // Providing the path to your placeholder image
          }}
        />
        <p className="font-medium text-2xl">{data.mission_name}</p>
      </div>

      <p className="text-xl flex flex-wrap">
        Launch Date :
        <span className="font-medium">
          {dateFormatter(data.launch_date_local)}
        </span>
      </p>

      <p className="text-xl flex flex-wrap">
        Rocket Name :
        <span className="font-medium">{data.rocket.rocket_name}</span>
      </p>

      <p className="text-xl flex flex-wrap">
        Site Name :
        <span className="font-medium">{data.launch_site.site_name}</span>
      </p>
      <p className="text-xl flex flex-wrap">
        Flight Number :<span className="font-medium">{data.flight_number}</span>
      </p>
      <p className="text-xl flex flex-wrap">
        Launch Status :
        <span className="font-medium">
          {data.launch_success ? "Success" : "Failure"}
        </span>
      </p>
    </div>
  );
};

export default LaunchCard;
