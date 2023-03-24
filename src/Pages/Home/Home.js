import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import HomeExtra from '../HomeExtra/HomeExtra';
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