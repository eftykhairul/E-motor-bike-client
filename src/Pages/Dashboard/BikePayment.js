import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import {useParams} from 'react-router-dom';
import Loading from '../Loading/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import BikeCheckoutForm from './BikeCheckoutform';


const stripePromise = loadStripe('pk_test_51LZKG5EhxUsNJDSQqYiMY8zGdOpDJtvrdAAzCbkSW5sDG37VWe8aBHvN76JqI8mKOBvfyIsREvuephtXL2YAi42r00WpD19ZLa');
const BikePayment = () => {
    const { id } = useParams();
    const url = `http://localhost:5001/bikeBooking/${id}`;

    const { data: bikeAppointment, isLoading } = useQuery(['bikeBooking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {bikeAppointment.userName}</p>
                    <h2 class="card-title justify-content-center">Please Pay for Bike {bikeAppointment.treatment}</h2>
                    {/* <p>Your Appointment: <span className='text-orange-700'>{appointment.date}</span> at {appointment.slot}</p> */}
                    <p>Pay: BDT {bikeAppointment.price}</p>
                    
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                { <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <BikeCheckoutForm bikeAppointment={bikeAppointment} />
                    </Elements>
                </div> }
            </div>
        </div>
    );
};

export default BikePayment;