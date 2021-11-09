import React from 'react';
import NavBar from '../Layouts/Navbar/navbar';
import Awards from './awards';
import Hero from './hero';
import OpctionBar from './optionBar';
import Pictures from './pictures';

const Home = () => {
    return (
        <>
            <NavBar />
            <OpctionBar />
            <Hero />
            <Awards />
            <Pictures />

        </>
    );
}

export default Home;