import React from 'react';
import { useLocation } from 'react-router-dom';
import "./Works.css";
import { works } from '../../consts';

const Works = () => {
    const { state } = useLocation();
    const { w } = state ?? {};
    const filterFunc = w ? ({ name }) => name === w : () => true;
    return <section data-page="work" className="flex flex-col gap-8 max-w-5xl mx-auto">
        <section data-section="work">
            <h2 className='p-4'>
                Works
            </h2>
            <section className="grid grid-cols-12 gap-12 mx-auto max-w-6xl mt-8">

                {
                    works.filter(filterFunc).map(({ name, image }) => (

                        <AWork key={name} workName={name} image={image} className="col-span-12 md:col-span-6 lg:col-span-4" />
                    ))
                }
            </section>
        </section>

    </section>
};

export default Works;

const AWork = ({ workName, image, className }) => {
    return (
        <div className={className}>
            <section data-work={workName} className='flex flex-col max-w-xl mx-auto' data-section="home-work" data-item={workName} data-techstack="dsjlfsdjlfdsjlf sdjfklsd sdjlfksdfsj">
                <picture>
                    <img src={image} alt={workName} />
                    <caption about={workName} />
                </picture>
            </section>
        </div>
    );
};
