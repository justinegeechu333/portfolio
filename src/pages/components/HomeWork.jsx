import React from "react";
import "./HomeWork.css";
import { NavLink } from "react-router-dom";
import TechIcon from "../../components/TechIcon";

const HomeWork = ({
  workName,
  image,
  className,
  description,
  techStacks = [],
}) => {
  return (
    <NavLink to="works" state={{ w: workName }} className={className}>
      <section
        data-work={workName}
        className="flex flex-col max-w-xl mx-auto"
        data-section="home-work"
        data-item={workName}
      >
        <picture>
          <img src={image} alt={workName} />
          <caption about={workName} />
        </picture>
        <div className="layover">
          <p className="home-work-description">{description}</p>
          <div className="home-work-tech-stack">
            {techStacks.map((name) => (
              <TechIcon key={name} name={name} />
            ))}
          </div>
        </div>
      </section>
    </NavLink>
  );
};

export default HomeWork;
