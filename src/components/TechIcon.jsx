import React from "react";
import "./TechIcon.css";
import classNames from "classnames";

const TechIcon = ({ name, isSmall, hoverInfo }) => {
  const path = name.includes(".")
    ? `/tech-stacks/${name}`
    : `/tech-stacks/${name}.svg`;
  const label = name.includes(".") ? name.split(".")[0] : name;
  const props = hoverInfo ? { "data-hover-info": hoverInfo } : {};
  return (
    <div
      className={classNames(
        "rounded-full shadow-md bg-slate-200 border border-slate-300",
        isSmall ? "w-8 h-8 p-1" : "w-12 h-12 p-2"
      )}
      data-component="tech-icon"
      {...props}
    >
      <img src={path} alt={label} />
    </div>
  );
};

export default TechIcon;
