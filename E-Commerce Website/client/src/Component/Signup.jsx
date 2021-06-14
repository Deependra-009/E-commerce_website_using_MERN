import React from 'react'
import './../CSS/signup.css'
import Desk from './../images/desk.png'
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import { NavLink } from 'react-router-dom';

const Signup = () => {
    return (
        <>
            <div className="container1">
                <div className="signupbox">
                    <div className="boxsign1">
                    <div className="headingsign">
                            <h1>Sign Up</h1>
                        </div>
                        <div className="signdata">
                            <form action="" className="sign-up-form">
                                <div className="inputfield">
                                    <EmailIcon style={{margin:"15px 10px",color:"black"}}></EmailIcon>
                                    <input type='text' placeholder="Enter Name"></input>
                                </div>
                                <div className="inputfield">
                                    <EmailIcon style={{margin:"15px 10px",color:"black"}}></EmailIcon>
                                    <input type='text' placeholder="Enter E-mail"></input>
                                </div>
                                <div className="inputfield">
                                    <EmailIcon style={{margin:"15px 10px",color:"black"}}></EmailIcon>
                                    <input type='text' placeholder="Enter Phone Number"></input>
                                </div>
                                <div className="inputfield">
                                    <LockIcon style={{margin:"15px 10px",color:"black"}}></LockIcon>
                                    <input type='text' placeholder="Enter Password"></input>
                                </div>
                                <div className="inputfield">
                                    <LockIcon style={{margin:"15px 10px",color:"black"}}></LockIcon>
                                    <input type='text' placeholder="Enter Confirm Password"></input>
                                </div>
                                <input type="submit" value="Submit" className="btn solid"></input>
                            </form>
                            <div id="show" className="clicklogin ">
                            Already Registered??  <NavLink to="/login">Login</NavLink>
                            
                        </div>
                        </div>
                    </div>
                    <div className="boxsign2">
                        <div className="deskimg">
                            <img src={Desk} alt=""></img>
                        </div>
                        <div id="show1" className="clicklogin">
                            Already Registered??  <NavLink to="/login">Login</NavLink>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Signup;