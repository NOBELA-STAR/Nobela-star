import React from "react";

const RedButton = ({text}) => {
  return (
    <button className="bg-pink text-[white] py-2 px-5 rounded-lg">
      {text}
    </button>
  );
};

export default RedButton;