import React from 'react';
import "./Hero.css";

const Hero = () => {
    return (
        <section className='hero flex flex-col max-w-5xl mx-auto sm:hiddn'>
            <h1 className="mx-auto">JustineChu</h1>
            <div className="h-80">

                <img alt="profile picture"
                    className='object-cover object-bottom w-full h-full'
                    // elementtiming="nbf-background"
                    src="https://images.squarespace-cdn.com/content/v1/64f0a4610f250e0159eb6aeb/c2db58a7-1f14-4753-a655-ff5556f562fe/Stocksy_comp_5379300_V3.jpg"
                    // width="5300" height="3808"
                    // sizes="(max-width: 799px) 200vw, 100vw"
                    // style={{ display: 'block', objectPosition: "40.23514629330462% 64.80405025314082%" }}
                    //     srcset={`
                    //     https://images.squarespace-cdn.com/content/v1/64f0a4610f250e0159eb6aeb/c2db58a7-1f14-4753-a655-ff5556f562fe/Stocksy_comp_5379300_V3.jpg?format=100w 100w, 
                    //     https://images.squarespace-cdn.com/content/v1/64f0a4610f250e0159eb6aeb/c2db58a7-1f14-4753-a655-ff5556f562fe/Stocksy_comp_5379300_V3.jpg?format=300w 300w, 
                    //     https://images.squarespace-cdn.com/content/v1/64f0a4610f250e0159eb6aeb/c2db58a7-1f14-4753-a655-ff5556f562fe/Stocksy_comp_5379300_V3.jpg?format=500w 500w, 
                    //     https://images.squarespace-cdn.com/content/v1/64f0a4610f250e0159eb6aeb/c2db58a7-1f14-4753-a655-ff5556f562fe/Stocksy_comp_5379300_V3.jpg?format=750w 750w, 
                    //     https://images.squarespace-cdn.com/content/v1/64f0a4610f250e0159eb6aeb/c2db58a7-1f14-4753-a655-ff5556f562fe/Stocksy_comp_5379300_V3.jpg?format=1000w 1000w, 
                    //     https://images.squarespace-cdn.com/content/v1/64f0a4610f250e0159eb6aeb/c2db58a7-1f14-4753-a655-ff5556f562fe/Stocksy_comp_5379300_V3.jpg?format=1500w 1500w, 
                    //     https://images.squarespace-cdn.com/content/v1/64f0a4610f250e0159eb6aeb/c2db58a7-1f14-4753-a655-ff5556f562fe/Stocksy_comp_5379300_V3.jpg?format=2500w 2500w
                    // `}
                    // fetchpriority="low"
                    loading="lazy"
                    decoding="async"
                // data-loader="sqs" 
                />
            </div>
        </section>
    );
};

export default Hero;