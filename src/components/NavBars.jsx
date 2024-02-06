import classNames from 'classnames';
import React from 'react';
import "./NavBars.css";

import { NavLink, useSearchParams } from 'react-router-dom';
import { useParams } from '../hooks/useParams';
const BAR_COLOR = "#000";

const NavBars = () => {
    const { isSelected, setSelected } = useParams();
    return (
        <nav className="w-full flex flex-row items-center md:h-16 md:p-8 sticky top-0">
            <NavLink to="/" className="grow-0 shrink-0 flex title">JustineChu</NavLink>
            <div className='flex grow md:hidden'>
            </div>
            <div className="hidden md:flex justify-end grow h-full items-center">
                <NavLink to="/Works">Works</NavLink>
            </div>
            <button onClick={() => {
                if (isSelected) {
                    setSelected(false)
                } else {
                    setSelected(true)
                }
            }}
                className="shrink-0 grow-0 w-6 h-6 md:hidden"
            >
                <svg viewBox='-5 -5 10 10' className="menu-btn-svg" data-selected={isSelected}>
                    <line x1={-5} x2={5} y1={0} y2={0} stroke={BAR_COLOR} strokeWidth={1} data-line1 />
                    <line x1={-5} x2={5} y1={0} y2={0} stroke={BAR_COLOR} strokeWidth={1} data-line2 />
                </svg>
            </button>

        </nav>
    );
};

export default NavBars;