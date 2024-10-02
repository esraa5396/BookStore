import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./forms.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);


    // form Submit Handler
    const formSubmitHandle = (e)=>{
        e.preventDefault();
        if(email.trim() === ""){
            return toast.error("Email is required");
        }
        if(password.trim() === ""){
            return toast.error("Password is required");
        }
    }

    // Show Password Handler
    const showPasswordHandler = () => {
        setShowPassword(prev => !prev);
    }

    return (
        <div className="form-wrapper">
            <ToastContainer theme='colored' />
            <h2 className="form-title">Login to your account</h2>
            <form onSubmit={formSubmitHandle} className="form">
                <input 
                    type="email" 
                    placeholder='Email' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type={showPassword ? "text" : "password"}
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {showPassword ? <i onClick={showPasswordHandler} className="bi bi-eye-slash-fill show-password-icon"></i> : <i onClick={showPasswordHandler} className="bi bi-eye-fill show-password-icon"></i>}
                
                <button className="form-btn">Login</button>
            </form>
            <div className="form-footer">
                Don't have an account ? {" "}
                <Link to='/register' className='form-link'> Register</Link>
            </div>
        </div>
    )
}
