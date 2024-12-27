import React from "react";
import './Login.css'
const Login=()=>{
   return(
    <div className="login">
        <form>
        <input type="rext" placeholder="Enter User Name"/>
        <input type="password" placeholder="Enter Password"/>
        <button type="submit">Submit</button>
        </form>
    </div>
   )
}
export default Login;