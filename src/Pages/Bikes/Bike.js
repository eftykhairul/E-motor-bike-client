import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Bike = ({ bike,setTreatment }) => {
    const { name, price, images, description, role,slots } = bike;

    return (
        <div class="card w-96 bg-base-100 shadow-xl justify-center mb-5">
            <figure><img src={images} alt='' /></figure>
            <div class="card-body">
                <h2 class="card-title text-xl font-bold text-emerald-500 justify-center text-center">{name}</h2>
                <h2 class="card-title justify-center">Price: {price}</h2>
                <p className='px-3 py-2 justify-center'>About: {description?.length > 30 ? description.slice(0, 70) + "..." : description}</p>
                <div class="card-actions justify-center">
                    <label htmlFor="bike-modal" 
                    disabled={slots?.length === 0}
                    onClick = {()=> setTreatment(bike)}
                    className="btn modal-button btn-success uppercase">{role}</label>
                </div>
                
            </div>
        </div>
);
};

export default Bike;

