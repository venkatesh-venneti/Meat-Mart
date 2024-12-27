import React from "react";
import './Register.css';
const Register1 = () => {
    return (
        <div className="register-page">
            <img src=""></img>
            <h1>Register</h1>
            <form>
                <input type="text" placeholder="Enter First Name" />
                <input type="text" placeholder="Enter Last Name" />
                <input type="email" placeholder="Enter Email" />
                <input type="password" placeholder="Enter Password" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};  
export default Register1;