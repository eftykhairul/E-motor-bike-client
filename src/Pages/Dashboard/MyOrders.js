import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link} from 'react-router-dom';
import { toast } from 'react-toastify';
const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    
    useEffect(() => {
        if(user){
            fetch(`http://localhost:5001/bikeBooking?userEmail=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data));
        }
    },[user])

    return (
        <div>
            <h2 className='text-lime-400 text-2xl font-bold my-4'>My Orders: {orders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Bike Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Phone</th>
                            <th>Action</th>
                            {/* <th>Delete</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((a, index) => <tr key= {a._id}> 
                                <th>{index + 1}</th>
                                <td>{a.userName}</td>
                                <td>{a.treatment}</td>
                                <td>{a.price}</td>
                                <td>{a.role}</td>
                                <td>{a.phoneNum}</td>
                                <td>
                                    {(a.price && !a.paid) && <Link to={`/dashboard/bikePayment/${a._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link> }
                                    {(a.price && a.paid) && <span className=' text-success'>Paid</span> }
                                </td>
                                {/* <td orders={orders} ><Link to={`/dashboard/bikeBooking/${a.userEmail}`}><button className='btn btn-xs btn-success'>Delete</button></Link></td> */}

                            </tr>)
                        } 


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;