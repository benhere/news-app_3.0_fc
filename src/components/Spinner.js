import React from "react";
import spinner from "./spinner.gif";

const Spinner = () => {
  return (
    <div className="text-center">
      <img
        src={spinner}
        className="my-3"
        style={{ width: "50px", height: "50px" }}
        alt="loading"
      />
    </div>
  );
};

export default Spinner;
