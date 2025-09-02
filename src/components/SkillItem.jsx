import React from "react";

const SkillItem = (props) => {
  return (
    <div
      className="flex flex-col items-center justify-center py-2 rounded-xl"
      id={props.id}
    >
      {props.icon}
      <p>{props.skill}</p>
    </div>
  );
};

export default SkillItem;
