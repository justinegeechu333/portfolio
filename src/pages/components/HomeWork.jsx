import React from 'react';
import "./HomeWork.css";
import { NavLink } from 'react-router-dom';

const HomeWork = ({ workName, image }) => {
    return (
        <NavLink to="works" state={{ w: workName }}>
            <section data-work={workName} className='flex flex-col' data-section="home-work" data-item={workName} data-techstack="dsjlfsdjlfdsjlf sdjfklsd sdjlfksdfsj">
                <picture>
                    <img src={image} alt={workName} />
                    <caption about={workName} />
                </picture>
            </section>
        </NavLink>
    );
};

export default HomeWork;