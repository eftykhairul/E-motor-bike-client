import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import React from 'react'
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import Bikes from './Pages/Bikes/Bikes';
import Appointment from './Pages/Appointment/Appointment';
import Navigation from './Pages/Navigation/Navigation';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointments from './Pages/Dashboard/MyAppointments';
import MyOrders from './Pages/Dashboard/MyOrders';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';
import Payment from './Pages/Dashboard/Payment';
import BikePayment from './Pages/Dashboard/BikePayment';
import DeleteBike from './Pages/Dashboard/DeleteBike';

function App() {
  return (
    <div >
      <h1 className="text-center text-4xl font-bold text-primary p-3">E-Motor Bike Sales and Servicing</h1>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bikes" element={
          <RequireAuth>
            <Bikes></Bikes>
          </RequireAuth>
        } />
        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        } >
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          {/* <Route path="review" element={<MyReview></MyReview>}></Route> */}
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="bikePayment/:id" element={<BikePayment></BikePayment>}></Route>
          {/* <Route path="bikeBooking/:email" element={<DeleteBike></DeleteBike>}></Route> */}
          <Route path="orders" element={<MyOrders></MyOrders>}></Route>
          <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
        </Route>
        <Route path="service" element={
          <RequireAuth>
            <Appointment/>
          </RequireAuth>
        } />
        <Route exact path="/about" element={<About />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
      <ToastContainer />
    
    </div>
  );
}

export default App;
