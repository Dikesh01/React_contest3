import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { loginSuccess } from "../Redux/userAction";
import { useNavigate } from "react-router-dom";

const Login = () =>{
    let [username,setUsername] = useState("")
    let [password,setPassword] = useState("")
    let [error, setError] = useState("")
    const dispatch = useDispatch();

    let navigate = useNavigate();

    function implementLogin(e){
        e.preventDefault();
        // console.log(username);
        // console.log(password);

        if(!username || !password){
            setError("Username and password required!")
            return;
        }

        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              username: username,
              password: password,
            }),
          })
            .then((res) => {
              if (!res.ok) {
                setError('Invalid credentials');
              }
              return res.json();
            })
            .then((data) => {
              dispatch(loginSuccess(data));
              setError('')
              alert("User Logged in Successfully !")
              navigate("/profile")

            })
            .catch((error) => {
              setError(error.message);
            });
        
    }

    return (
        <div className="login_page">
            <div className="logIn_container">
                <form onSubmit={implementLogin}>
                    <div>
                        <p>Welcome back! 👋</p>
                        <h2>Sign in to your account</h2>
                    </div>
                    <div className="emailClass">
                        <label for="email">Your email</label>
                        <input type="text" id="email" name="email" 
                        onChange={(e)=>setUsername(e.target.value)}/>
                        
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" 
                        onChange={(e)=>setPassword(e.target.value)}  />
                    </div>
                    <button type="submit">CONTINUE</button>
                    <a id="forgot_password" href="https://www.google.com/">Forget your password?</a>
                    {error && alert(error)}
                    
                </form>
                <p>Don’t have an account? <a href="https://www.google.com/">Sign up</a></p>
            </div>
        </div>
    )
}

export default Login;