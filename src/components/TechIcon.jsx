import React from 'react';
import "./TechIcon.css";

const TechIcon = ({ name }) => {
    const path = name.includes('.') ? `/tech-stacks/${name}` : `/tech-stacks/${name}.svg`;
    const label = name.includes('.') ? name.split('.')[0] : name;
    return (
        <div className='w-12 h-12 rounded-full shadow-md bg-slate-200 p-2 border border-slate-300' data-component="tech-icon">
            <img src={path} alt={label} />
        </div>
    );
};

export default TechIcon;