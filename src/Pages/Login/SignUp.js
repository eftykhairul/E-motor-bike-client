import React, { useState } from 'react';
import auth from '../../firebase.init';
import "./Login.css";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import {Link, useNavigate} from 'react-router-dom';
import Loading from '../Loading/Loading';
import useToken from '../hooks/useToken';

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [token] = useToken(user || gUser)
    const navigate= useNavigate()

    let signInError;

    if (token){
        navigate('/service');
    }

    if(error||gError||updateError){
        signInError= <p> {error?.message || gError?.message || updateError?.message} </p>
    }

    const onSubmit = async data => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email,data.password);
        await updateProfile({ displayName: data.name});
        // navigate('/')
    }
    

    if(loading || gLoading || updating){
        return <Loading></Loading>
    }

    return (
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white" >
                            <div className="card-body p-5 text-center">

                                <div className="mb-md-5 mt-md-4 pb-5">

                                    <h2 className="fw-bold mb-2 text-uppercase">Sign Up</h2>
                                    <p className="text-white-50 mb-5">Please enter your login and password!</p>

                                    <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-outline form-white mb-4">
                                        <input placeholder='Your Name' type="text" className="form-control form-control-lg" 
                                        {...register("name", {
                                            required:{
                                                value:true,
                                                message:"Name is Required"
                                            },
                                            
                                        })}
                                        />

                                        <label className="label">
                                        {errors.name?.type === "required"? <span className='label-text-alt text-red-500'>{errors.name?.message}</span>:null}
                                        {/* {errors.email?.type === "pattern" & <span className='label-text-alt text-red-500'>{errors.password.message}</span>} */}
                                        </label>
                                
                                    
                                    </div>
                                    {/* </form> */}
                                    {/* <form onSubmit={handleSubmit(onSubmit)}> */}
                                    <div className="form-outline form-white mb-4">
                                        <input placeholder='Your Email' type="email" className="form-control form-control-lg" 
                                        {...register("email", {
                                            required:{
                                                value:true,
                                                message:"Email is Required"
                                            },
                                            pattern: {
                                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                message:"Provide a valid Email"
                                            }
                                        })}
                                        />
                                        
                                        
                                        <label className="label">  
                                        {errors.email?.type === "required"? <span className='label-text-alt text-red-500'>{errors.email?.message}</span>:null}
                                        {errors.email?.type === "pattern"? <span className='label-text-alt text-red-500'>{errors.email?.message}</span>:null}
                                        </label>
                                        
                                
                                    
                                    </div>
                                    {/* </form> */}
                                    {/* <form onSubmit={handleSubmit(onSubmit)}> */}
                                    <div className="form-outline form-white mb-4">
                                        <input placeholder='Your Phone' id='phone' name='phone'  type="number" pattern="[0-9]+" className="form-control form-control-lg" 
                                        {...register("phone", {
                                            required:{
                                                value:true,
                                                message:"Phone is Required"
                                            }
                                        })}
                                        />
                                        
                                        
                                            
                                        {errors.phone?.type === "required"? <span className='label-text-alt text-red-500'>{errors.phone?.message}</span>:null}
                                        {/* {errors.email?.type === "pattern" & <span className='label-text-alt text-red-500'>{errors.email.message}</span>} */}
                                        
                                
                                    
                                    </div>
                                    {/* </form> */}
                                    {/* <form onSubmit={handleSubmit(onSubmit)}> */}
                                    <div className="form-outline form-white mb-4">
                                        <input placeholder='Your Password' type="password" className="form-control form-control-lg" 
                                        {...register("password", {
                                            required:{
                                                value:true,
                                                message:"Password is Required"
                                            },
                                            minLength: {
                                                value: 6,
                                                message:"Must be 6 character long"
                                            }
                                        })}
                                        />
                                        {/* <label className="label" > */}
                                        {/* {errors.password?.type === "minLength" & <span className='label-text-alt text-red-500'>{errors.password?.message}</span>} */}
                                        {/* </label> */}
                                        {errors.password?.type === "required"? <span className='label-text-alt text-red-500'>{errors.password?.message}</span>:null}
                                        {errors.password?.type === "minLength"? <span className='label-text-alt text-red-500'>{errors.password?.message}</span>:null}
                                        
                                    </div>
                                    {/* <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p> */}
                                    {/* {signInError} */}
                                    <input className="btn btn-outline-light btn-lg px-5" type="submit" value="Sign Up"/>
                                    </form>
                                    
                                    
                                    
                                    <div>
                                    
                                    </div>
                                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                        <a href="#!"  className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                                        <a href="#!"  className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                                        <Link to='' onClick={() => signInWithGoogle()} className="text-white"><i className="fab fa-google fa-lg"></i></Link>
                                    </div>

                                </div>

                                <p className="mb-0">Already have an account? <Link to="/login" className="text-white-50 fw-bold" >Login</Link></p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;