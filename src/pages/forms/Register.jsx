import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./forms.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {
        const [email, setEmail] = useState("");
        const [userName, setUserName] = useState("");
        const [password, setPassword] = useState("");
    
    
        // form Submit Handler
        const formSubmitHandle = (e)=>{
            e.preventDefault();
            if(email.trim() === ""){
                return toast.error("Email is required");
            }
            if(userName.trim() === ""){
                return toast.error("Username is required");
            }
            if(password.trim() === ""){
                return toast.error("Password is required");
            }
        }
    
        return (
            <div className="form-wrapper">
                <ToastContainer theme='colored' />
                <h2 className="form-title">Create New Account</h2>
                <form onSubmit={formSubmitHandle} className="form">
                    <input 
                        type="email" 
                        placeholder='Email' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder='Username' 
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <input 
                        type="password"
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />                    
                    <button className="form-btn">Register</button>
                </form>
                <div className="form-footer">
                    Already have an account ? {" "}
                    <Link to='/login' className='form-link'> Login</Link>
                </div>
            </div>
        )
}
