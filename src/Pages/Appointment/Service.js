import React from 'react';

const Service = ({service,setBooking}) => {
    const{name,slots,price}=service;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl mb-5">
            <div class="card-body">
                <h2 class="card-title text-xl font-bold text-emerald-500 justify-center text-center">{name}</h2>
                <p>{
                    slots.length > 0 
                    ? <span> {slots[0]} </span>
                    :<span className='text-red-500'>Try another date</span>
                    }</p>
                <p>{slots.length} {slots.length > 1 ? "spaces" : "space"} available</p>
                <h3 className='font-bold'>Price BDT {price}</h3>
                <div class="card-actions justify-center">
                    <label for="booking-modal" 
                    disabled={slots.length==0} 
                    onClick={()=>setBooking(service)}
                    class="btn modal-button btn-success uppercase">Book</label>
                </div>
            </div>
        </div>
    );
};

export default Service;