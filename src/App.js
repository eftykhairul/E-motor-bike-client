import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './Pages/Home/Home';
import React from 'react';
import Navigation from './Pages/Navigation/Navigation';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div >
      <h1 className="text-center text-4xl font-bold text-primary p-3">E-Motor Bike Sales and Servicing</h1>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
