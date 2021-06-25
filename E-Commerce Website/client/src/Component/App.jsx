import React, { createContext,useEffect, useContext, useReducer, useState } from 'react'
import Login from './Login';
import Navbar from './Navbar';
import Signup from './Signup';
import Home from './Home';
import { Route } from 'react-router-dom';
import Mobiles from './Mobiles';
import Electronics from './Electronics';
import Laptop from './Laptop';
import Television from './Television';
import Camera from './Camera';
import Refrigrator from './Refrigrator';
import Appliances from './Appliances';
import Microwave from './Microwave';
import Ac from './Ac';
import Washingmachine from './Washingmachine';
import Headphone from './Headphone';
import Chimney from './Chimney';
import BeautyToys from './BeautyToys';
import Beauty from './Beautypage';
import Toy from './Toypage';
import Fitness from './Fitnesspage';
import Food from './Foodpage';
import Fashion from './Fashion';
import Menspage from './Menspage';
import Womenspage from './Womenspage';
import Kidspage from './Kidspage';
import Watchpage from './Wathpage';
import Homedecor from './Homedecoration';
import Homedecorpage from './Homedecorpage';
import Bedroomfurniturepage from './Bedroomfurniturepage';
import Livingfurniturepage from './Livingfurniturepage';
import Kidsfurniturepage from './Kidsfurniturepage';
import Cookware from './Cookwarepage';
import Computer from './Computer';
import Gaming from './Gaming';
import Footer from './Footer';
import Cart from './../CartComponent/Cart';
import Profile from './Profile';
import {initialState,reducer,cartreducer,InitialState} from '../Reducer/useReducer';
import Logout from './Logout';

export const UserContext = createContext();


const App = () => {

    const [cartdata,newupdatecart]=useState([]);

    const setcartdata=(value)=>{
        newupdatecart(value);
    }

    console.log(cartdata);
    const [state,setstate]=useState();

    const update=(val)=>{
        setstate(val);
    }

        // useEffect(()=>{
        //     const CartUpdate = async () => {
        //         try {
        //           const res = await fetch('/cart', {
        //             method: "GET",
        //             headers: {
        //               Accept: "application/json",
        //               "Content-Type": "application/json"
            
        //             },
        //             credentials: "include"
        //           });
        //           const data = await res.json();
        //           setcartdata(data);
        //           console.log(data);
            
        //         }
        //         catch (err) {
        //           console.log(err);
        //         }
        //       }

        //       CartUpdate();
        // })
        


   
    // const [state,dispatch]=useReducer(reducer,initialState);

    return (
        <>

            <UserContext.Provider value={{state,update,cartdata,setcartdata}}>


                <Navbar></Navbar>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route path="/login">
                    <Login></Login>
                </Route>
                <Route path="/register">
                    <Signup></Signup>
                </Route>
                <Route path="/mobiles">
                    <Mobiles></Mobiles>
                </Route>
                <Route path="/electronics">
                    <Electronics></Electronics>
                </Route>
                <Route path="/laptop">
                    <Laptop></Laptop>
                </Route>
                <Route path="/television">
                    <Television></Television>
                </Route>
                <Route path="/camera">
                    <Camera></Camera>
                </Route>
                <Route path="/refrigrator">
                    <Refrigrator></Refrigrator>
                </Route>
                <Route path="/appliances">
                    <Appliances></Appliances>
                </Route>
                <Route path="/ac">
                    <Ac></Ac>
                </Route>
                <Route path="/microwave">
                    <Microwave></Microwave>
                </Route>
                <Route path="/washingmachine">
                    <Washingmachine></Washingmachine>
                </Route>
                <Route path="/headphone">
                    <Headphone></Headphone>
                </Route>
                <Route path="/chimney">
                    <Chimney></Chimney>
                </Route>
                <Route path="/beautytoys">
                    <BeautyToys></BeautyToys>
                </Route>
                <Route path="/beauty">
                    <Beauty></Beauty>
                </Route>
                <Route path="/toy">
                    <Toy></Toy>
                </Route>
                <Route path="/fitness">
                    <Fitness></Fitness>
                </Route>
                <Route path="/food">
                    <Food></Food>
                </Route>
                <Route path="/fashion">
                    <Fashion></Fashion>
                </Route>
                <Route path="/mentopwear">
                    <Menspage></Menspage>
                </Route>
                <Route path="/womens">
                    <Womenspage></Womenspage>
                </Route>
                <Route path="/kids">
                    <Kidspage></Kidspage>
                </Route>
                <Route path="/watch">
                    <Watchpage></Watchpage>
                </Route>
                <Route path="/homedecoration">
                    <Homedecor></Homedecor>
                </Route>
                <Route path="/bedroomfurniture">
                    <Bedroomfurniturepage></Bedroomfurniturepage>
                </Route>
                <Route path="/livingfurniture">
                    <Livingfurniturepage></Livingfurniturepage>
                </Route>
                <Route path="/kidsfurniture">
                    <Kidsfurniturepage></Kidsfurniturepage>
                </Route>
                <Route path="/homedecor">
                    <Homedecorpage></Homedecorpage>
                </Route>
                <Route path="/cookware">
                    <Cookware></Cookware>
                </Route>
                <Route path="/computer">
                    <Computer></Computer>
                </Route>
                <Route path="/gaming">
                    <Gaming></Gaming>
                </Route>
                <Route path="/cart">
                    <Cart></Cart>
                </Route>
                <Route path="/profile">
                    <Profile></Profile>
                </Route>
                <Route path="/logout">
                    <Logout></Logout>
                </Route>
                <Footer></Footer>
            </UserContext.Provider>
        </>
    )
};


export default App;