import React, { useEffect, useRef } from "react";

const RenderCnt = () => {
  const count = useRef(1);
  // console.log("RenderCnt");

  useEffect(() => {
    count.current++;
  });

  return <div> Renders: {count.current} </div>;
};

export default RenderCnt;
