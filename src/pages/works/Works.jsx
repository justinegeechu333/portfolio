import React from "react";
import { useLocation } from "react-router-dom";
import "./Works.css";
import { works } from "../../consts";
import TechIcon from "../../components/TechIcon";

const Works = () => {
  const { state } = useLocation();
  const { w } = state ?? {};
  const filterFunc = w ? ({ name }) => name === w : () => true;
  return (
    <section
      data-page="work"
      className="flex flex-col gap-8 max-w-6xl w-fit mx-auto"
    >
      <section data-section="works">
        <h2 className="p-4">Works</h2>
        <section className="flex flex-col gap-4 pb-4">
          {works
            .filter(filterFunc)
            .map(({ name, image, techStacks, description }, idx) => (
              <>
                {idx !== 0 && (
                  <span className="w-full h-[1px] bg-slate-400"></span>
                )}
                <AWork
                  key={name}
                  workName={name}
                  image={image}
                  techStacks={techStacks}
                  description={description}
                />
              </>
            ))}
        </section>
      </section>
    </section>
  );
};

export default Works;

const AWork = ({ workName, image, className, description, techStacks }) => {
  return (
    <div className={className}>
      <section
        data-work={workName}
        className="flex flex-row max-w-[800px] gap-4"
        data-section="home-work"
        data-item={workName}
        data-techstack={techStacks.join(",")}
      >
        <picture className="basis-60 shrink-0 grow-0">
          <img src={image} alt={workName} />
          <caption about={workName} />
        </picture>
        <section className="flex flex-col gap-2 flex-grow">
          <h2>{workName}</h2>
          <h3 className="text-lg">Tech Stacks</h3>
          <p className="text-sm">{description}</p>
          <div className="flex flex-row gap-2 flex-wrap">
            {techStacks.map((skill) => (
              <TechIcon
                isSmall={true}
                key={skill}
                name={skill}
                hoverInfo={skill}
              />
            ))}
          </div>
        </section>
      </section>
    </div>
  );
};
