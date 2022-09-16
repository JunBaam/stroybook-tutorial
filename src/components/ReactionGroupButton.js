import React from "react";
import ReactionButton from "./ReactionButton";

const ReactionGroupButton = ({ buttons }) => {
  return (
    <div className="flex gap-4">
      {buttons.map((value, index) => (
        <ReactionButton key={index} buttons={value} />
      ))}
    </div>
  );
};

export default ReactionGroupButton;
