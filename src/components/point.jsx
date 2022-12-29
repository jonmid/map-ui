import React from "react";
import ReactTooltip from "react-tooltip";

import Tooltip from "./Tooltip";

const Point = ({ location }) => {
  return (
    <>
      <span
        className={`absolute flex justify-center items-center h-3 w-3 top-[678px] left-[300px]`}
        data-tip
        data-for="tooltip1"
      >
        <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-red-400 opacity-80"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>

        <Tooltip id="tooltip1" data={location.forecastTumaco} />
      </span>

      <span
        className={`absolute flex justify-center items-center h-3 w-3 top-[647px] left-[334px]`}
        data-tip
        data-for="tooltip2"
      >
        <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-red-400 opacity-80"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>

        <Tooltip id="tooltip2" data={location.forecastGuapi} />
      </span>

      <span
        className={`absolute flex justify-center items-center h-3 w-3 top-[595px] left-[367px]`}
        data-tip
        data-for="tooltip3"
      >
        <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-red-400 opacity-80"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>

        <Tooltip id="tooltip3" data={location.forecastBuenaventura} />
      </span>

      <span
        className={`absolute flex justify-center items-center h-3 w-3 top-[501px] left-[353px]`}
        data-tip
        data-for="tooltip4"
      >
        <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-red-400 opacity-80"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>

        <Tooltip id="tooltip4" data={location.forecastSolano} />
      </span>
    </>
  );
};

export default Point;
