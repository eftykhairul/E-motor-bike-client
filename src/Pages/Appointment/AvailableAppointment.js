import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';
import Loading from '../Loading/Loading';
const AvailableAppointment = ({date}) => {
    // const [services,setServices]=useState([]);
    const [booking,setBooking]=useState(null);
    const formattedDate = format(date, 'PP');
    const {data: services,isLoading, refetch} = useQuery(['available', formattedDate], ()=> fetch(`http://localhost:5001/available?date=${formattedDate}`)
        .then(res=>res.json()))

    if(isLoading){
        return <Loading></Loading>
    }

    // useEffect(()=>{
    //     fetch(`https://aqueous-springs-79086.herokuapp.com/available?date=${formattedDate}`)
    //     .then(res=>res.json())
    //     .then(data=> setServices(data));
    // },[formattedDate])
    return (
        <div>
            <h1 className='text-xl text-cyan-500 text-center mb-5 my-12 font-bold'>Available Service Appointment on {format(date,'PP')}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <Service
                    key={service._id}
                    service={service}
                    setBooking={setBooking}
                    ></Service>)
                }
            </div>
            {booking && <BookingModal 
            date={date} 
            booking={booking}
            setBooking={setBooking}
            refetch={refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;