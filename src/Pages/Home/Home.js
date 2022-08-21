import React from 'react';
import Banner from '../Banner/Banner';
import Bikes from '../Bikes/Bikes';
import Footer from '../Footer/Footer';
import HomeExtra from '../HomeExtra/HomeExtra';
import Navigation from '../Navigation/Navigation';
import Services from '../Services/Services';
import "./Home.css";
const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <HomeExtra></HomeExtra>
            <Footer></Footer>
        </div>
    );
};

export default Home;