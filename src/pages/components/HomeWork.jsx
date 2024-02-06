import React from 'react';
import "./HomeWork.css";

const HomeWork = ({ workName, image }) => {
    return (
        <section data-work={workName} className='flex flex-col' data-section="home-work" data-item={workName}>
            <picture>
                <img src={image} alt={workName} />
                <caption about={workName} />
            </picture>
        </section>
    );
};

export default HomeWork;