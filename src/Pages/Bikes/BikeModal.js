import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import MyOrders from '../Dashboard/MyOrders';

const BikeModal = ({treatment,setTreatment}) => {
    const {_id, name, price,  role} =treatment;
    const [user, loading, error] = useAuthState(auth);
    const handleBooking = event =>{
        event.preventDefault();
        // console.log(name,_id,price,role);
        const bikeBooking = {
            treatmentId: _id,
            treatment :name,
            price : price,
            role : role,
            userEmail: user.email,
            userName :user.displayName,
            phoneNum : event.target.phone.value

        }

        fetch('http://localhost:5001/bikeBooking',{
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(bikeBooking)
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            if(data.success){
                toast(`Bike name ${name} added for ${price} BDT`)
            }
            else{
                toast(`Bike name ${name} added for ${price} BDT`)
            }
            setTreatment(null);

        })
        
    }
    return (
        <div>
            <input type="checkbox" id="bike-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="bike-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Booking for: {name} </h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" disabled value={name} className="input input-bordered w-full max-w-xs" />
                        <input type="text" disabled value={price} className="input input-bordered w-full max-w-xs" />
                        <input type="text" disabled value={role || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-success w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BikeModal;