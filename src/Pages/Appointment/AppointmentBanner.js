import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import repair from "../../image/repair.jpg";
import 'react-day-picker/dist/style.css';
const AppointmentBanner = ({date,setDate}) => {
    
    return (
        <div style={{
            background:"",
            backgroundSize: 'cover'
        }} className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse space-x-6">
                <img src={repair} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>

        </div>
    );
};

export default AppointmentBanner;