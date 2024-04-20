import classNames from "classnames";
import React from "react";
import "./NavBars.css";

import { NavLink, useSearchParams } from "react-router-dom";
import { useParams } from "../hooks/useParams";
const BAR_COLOR = "#000";

const NavBars = () => {
  const { isSelected, setSelected } = useParams();
  return (
    <nav className="w-full flex flex-row items-center sm:h-16 sm:p-8 sticky top-0">
      <NavLink to="/" className="grow-0 shrink-0 flex title">
        JustineChu
      </NavLink>
      <div className="flex grow sm:hidden"></div>

      <div
        data-section="routes"
        className="hidden sm:flex justify-end grow h-full items-center gap-4"
      >
        <NavLink to="/Works">Works</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
      </div>
      <div
        data-section="routes"
        className={classNames(
          "sm:hidden overflow-hidden absolute left-0 right-0 top-full flex flex-col gap-2 bg-slate-50 drop-shadow-sm justify-center items-center duration-200",
          isSelected ? "h-auto" : "h-0"
        )}
      >
        <NavLink to="/Works">Works</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
      </div>
      <button
        onClick={() => {
          if (isSelected) {
            setSelected(false);
          } else {
            setSelected(true);
          }
        }}
        className="shrink-0 grow-0 w-6 h-6 sm:hidden"
      >
        <svg
          viewBox="-5 -5 10 10"
          className="menu-btn-svg"
          data-selected={isSelected}
        >
          <line
            x1={-5}
            x2={5}
            y1={0}
            y2={0}
            stroke={BAR_COLOR}
            strokeWidth={1}
            data-line1
          />
          <line
            x1={-5}
            x2={5}
            y1={0}
            y2={0}
            stroke={BAR_COLOR}
            strokeWidth={1}
            data-line2
          />
        </svg>
      </button>
    </nav>
  );
};

export default NavBars;
