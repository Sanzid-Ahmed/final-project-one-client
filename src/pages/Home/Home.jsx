import React from 'react';
import Banner from './Banner/Banner';
import HowItWork from './HowItWork/HowItWork';
import OurServices from './OurServices/OurServices';
import Brands from './Brands/Brands';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWork></HowItWork>
            <OurServices></OurServices>
            <Brands></Brands>
        </div>
    );
};

export default Home;