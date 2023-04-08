import React from 'react';
import { toast } from 'react-toastify';
const DeleteBike = ({orders}) => {
    const {userEmail} = orders;
    const handleDelete = () =>{
        fetch(`http://localhost:5001/bikeBooking/${userEmail}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.delete){
                toast.success(`Bike Deleted`)
            }
        });
    }
    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {orders.userName}</p>
                    {/* <h2 class="card-title justify-content-center">Please Pay for Bike {bikeAppointment.treatment}</h2> */}
                    {/* <p>Your Appointment: <span className='text-orange-700'>{appointment.date}</span> at {appointment.slot}</p> */}
                    {/* <p>Pay: BDT {bikeAppointment.price}</p> */}
                    <button onClick={() => handleDelete(userEmail)}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default DeleteBike;