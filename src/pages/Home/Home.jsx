import React from 'react';
import Banner from './Banner/Banner';
import HowItWork from './HowItWork/HowItWork';
import OurServices from './OurServices/OurServices';
import Brands from './Brands/Brands';
import Reviews from './Reviews/Reviews';


//If a data need to use in various place then we shoud keep the data at a center poient. 
const reviewsPromise = fetch('/reviews.json').then (res => res.json());


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWork></HowItWork>
            <OurServices></OurServices>
            <Brands></Brands>
            <Reviews reviewsPromise = {reviewsPromise}></Reviews>
        </div>
    );
};

export default Home;