import React from 'react'
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import './../CSS/login.css';
import rocket from './../images/rocket.png'
import { NavLink } from 'react-router-dom';

const Login=()=>{
    return (
        <>
            <div className="container">
                <div className="loginbox">
                    <div className="box1">
                        <img src={rocket} alt="Login"></img>
                        <NavLink id="link0" to="/register">Create an Account</NavLink>
                    </div>
                    <div className="box2">
                        <div className="heading">
                            <h1>Sign In</h1>
                        </div>
                        <div className="data">
                            <form action="" className="sign-in-form">
                                <div className="input-field">
                                    <EmailIcon style={{margin:"15px 10px",color:"black"}}></EmailIcon>
                                    <input type="text" placeholder="Enter Email"></input>
                                </div>
                                <div className="input-field">
                                    <LockIcon style={{margin:"15px 10px",color:"black"}}></LockIcon>
                                    <input type="text" placeholder="Enter Password"></input>
                                </div>
                                <input type="submit" value="login" className="btn solid"></input>
                            </form>
                            <NavLink id="link1" to="/register">Create an Account</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Login;