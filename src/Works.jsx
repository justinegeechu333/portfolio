import React from 'react';
import { useLocation } from 'react-router-dom';
import "./Works.css";

const Works = () => {
    const { state } = useLocation();
    const { w } = state ?? {};
    return <section data-page="works">
        Work: {w}
    </section>
};

export default Works;