import React from "react";
import { dateFormatter } from "../Utils/Utils";
const LaunchCard = ({ data }) => {
  return (
    <div className="border shadow-sm flex flex-col border-violet-500 bg-white p-3 my-2 rounded-xl">
      <div className="flex flex-row gap-4 items-center mb-2">
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
        Rocket Name :
        <span className="font-medium">{" " + data.rocket.rocket_name}</span>
      </p>
      <p className="text-xl flex flex-wrap">
        Launch Date :
        <span className="font-medium">
          {" " + dateFormatter(data.launch_date_local)}
        </span>
      </p>
      <p className="text-xl flex flex-wrap">
        Site Name :
        <span className="font-medium">{" " + data.launch_site.site_name}</span>
      </p>
    </div>
  );
};

export default LaunchCard;
