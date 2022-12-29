import React, { useEffect, useState } from "react";
import { DotWave } from "@uiball/loaders";

import useFetch from "../customHook/useFetch";
import Point from "./point";

const App = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:3000/api/v1/locations"
  );

  if (error) {
    console.log(error);
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center w-screen h-screen">
        <DotWave size={77} speed={1} color="red" />
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center">
      <div className="relative w-[800px] h-[985px] bg-yellow-300 container-image">
        {data && data.map((item) => <Point key={item.id} location={item} />)}
      </div>
    </div>
  );
};

export default App;
