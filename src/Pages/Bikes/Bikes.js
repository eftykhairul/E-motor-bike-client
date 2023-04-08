import React, { useEffect, useState } from 'react';
import MyOrders from '../Dashboard/MyOrders';
import Bike from './Bike';
import BikeModal from './BikeModal';
const Bikes = () => {
    const [bikes,setBikes]= useState([]);
    const [treatment,setTreatment] = useState(null);
    useEffect( ()=>{
        fetch('http://localhost:5001/bike')
        .then(res=>res.json())
        .then(data=>setBikes(data))
    },[])
    return (
        <div className='text-center my-10'>
            <h1 className='text-4xl font-bold text-primary my-5'>Our Products</h1>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 sm:justify-center  lg:mx-40'>
            {
                bikes?.map(bike=> <Bike
                    key={bike._id}
                    bike={bike}
                    setBikes={setBikes}
                    setTreatment={setTreatment}
                    ></Bike>
                )
            }
            
            </div>
            {treatment && <BikeModal 
            treatment={treatment}
            setTreatment={setTreatment}
            ></BikeModal>}
            
        </div>
        
    );
};

export default Bikes;