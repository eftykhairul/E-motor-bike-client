import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Banner.css';
const Banner = () => {
    return (
    <Carousel>
        <Carousel.Item>
        <img
            className="d-block w-100 img"
            src="https://iqaasports.com/pictures/3_banner.jpg"
            alt="First slide"
        />
        <Carousel.Caption>
            <h3 className='text-2xl text-orange-500 font-bold'>Choose Us! Stay Safe</h3>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100 img"
            src="https://ucarecdn.com/82011d99-c698-474e-a745-137bb9f2db04/-/format/auto/-/preview/3000x3000/-/quality/lighter/BANNER%20.jpg"
            alt="Second slide"
        />

        <Carousel.Caption>
            <h3 className='text-2xl text-orange-500 font-bold'>Visit Our store! Explore Bikes</h3>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100 img"
            src="https://www.motorbikeworks.com/wp-content/uploads/hero_fastlaneservices_mobile.jpg"
            alt="Third slide"
        />

        <Carousel.Caption>
            <h3 className='text-2xl text-orange-500 font-bold'>Fastest Service you can ever have</h3>
        </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    );
};

export default Banner;