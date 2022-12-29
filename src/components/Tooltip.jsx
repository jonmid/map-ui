import React from "react";
import ReactTooltip from "react-tooltip";

const Tooltip = ({ id, data }) => {
  return (
    <ReactTooltip id={id} place="top" effect="solid" className="w-96 text-xs">
      <h1 className="font-extrabold">{data.title1}</h1>
      <h3 className="mt-3">{data.forecast_date}</h3>
      <p className="mt-3 text-[10px]">
        <span className="mr-1 font-extrabold">{data.title2}</span>
        {data.p1}
      </p>
      <p className="mt-3 text-[10px]">
        <span className="mr-1 font-extrabold">{data.title3}</span>
        {data.p2}
      </p>
    </ReactTooltip>
  );
};

export default Tooltip;
