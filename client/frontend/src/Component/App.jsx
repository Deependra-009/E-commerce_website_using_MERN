import React, { createContext, useState } from 'react'
import { Routes, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

import Home from './Home';
import { Route } from 'react-router-dom';


export const UserContext = createContext();


const App = () => {

    const [cartdata, newupdatecart] = useState([]);
    const [state, setstate] = useState();
    const [bookproduct, setbookproduct] = useState();
    const [paymentprice, setpaymentprice] = useState();

    const history = useNavigate();

    const setPayment = (args) => {
        setpaymentprice(args);
    }


    const setcartdata = (value) => {
        newupdatecart(value);
    }


    const updatebookproduct = (args) => {
        setbookproduct(args);
        history.push('/detailspage');
    }



    const update = (val) => {
        setstate(val);
    }



    return (
        <>

            <UserContext.Provider value={{ state, update, cartdata, setcartdata, updatebookproduct, bookproduct, paymentprice, setPayment }}>


                <Navbar></Navbar>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>

                {/* <Route path="/login" element={<Login />} />

                <Route path="/signup" element={<Signup />} />

                <Route path="/" element={<Mobiles />} />

                <Route path="/" element={<Electronics />} />
 
                <Route path="/" element={<Laptop />} />

 
                <Route path="/" element={<Television />} />


                <Route path="/" element={<Camera />} />


                <Route path="/" element={<Login />} /> */}

                {/*                 
                <Route path="/refrigrator">
                    <Refrigrator></Refrigrator>
                </Route>
                <Route path="/" element={<Login />} />

                
                <Route path="/appliances">
                    <Appliances></Appliances>
                </Route>
                <Route path="/" element={<Login />} />

                
                <Route path="/ac">
                    <Ac></Ac>
                </Route>
                <Route path="/" element={<Login />} />

                
                <Route path="/microwave">
                    <Microwave></Microwave>
                </Route>
                <Route path="/" element={<Login />} />

                
                <Route path="/washingmachine">
                    <Washingmachine></Washingmachine>
                </Route>
                <Route path="/" element={<Login />} />

                
                <Route path="/headphone">
                    <Headphone></Headphone>
                </Route>
                <Route path="/" element={<Login />} />

                
                <Route path="/chimney">
                    <Chimney></Chimney>
                </Route>
                <Route path="/" element={<Login />} />

                
                <Route path="/beautytoys">
                    <BeautyToys></BeautyToys>
                </Route>
                <Route path="/" element={<Login />} />

                
                <Route path="/beauty">
                    <Beauty></Beauty>
                </Route>
                <Route path="/" element={<Login />} />

                
                <Route path="/toy">
                    <Toy></Toy>
                </Route>
                <Route path="/" element={<Login />} />

                
                <Route path="/fitness">
                    <Fitness></Fitness>
                </Route>
                <Route path="/" element={<Login />} />

                
                <Route path="/food">
                    <Food></Food>
                </Route>
                <Route path="/" element={<Login />} />

                
                <Route path="/fashion">
                    <Fashion></Fashion>
                </Route>
                <Route path="/" element={<Login />} />

                
                <Route path="/mentopwear">
                    <Menspage></Menspage>
                </Route>
                <Route path="/" element={<Login />} />

                
                <Route path="/womens">
                    <Womenspage></Womenspage>
                </Route>
                <Route path="/" element={<Login />} />

                
                <Route path="/kids">
                    <Kidspage></Kidspage>
                </Route>
                <Route path="/" element={<Login />} />

                
                <Route path="/watch">
                    <Watchpage></Watchpage>
                </Route>
                <Route path="/" element={<Login />} />

                
                <Route path="/homedecoration">
                    <Homedecor></Homedecor>
                </Route>
                <Route path="/" element={<Login />} />

                
                <Route path="/bedroomfurniture">
                    <Bedroomfurniturepage></Bedroomfurniturepage>
                </Route>
                <Route path="/" element={<Login />} />

                
                <Route path="/livingfurniture">
                    <Livingfurniturepage></Livingfurniturepage>
                </Route>
                <Route path="/" element={<Login />} />

                
                <Route path="/kidsfurniture">
                    <Kidsfurniturepage></Kidsfurniturepage>
                </Route>
                <Route path="/" element={<Login />} />

                
                <Route path="/homedecor">
                    <Homedecorpage></Homedecorpage>
                </Route>
                <Route path="/" element={<Login />} />

                
                <Route path="/cookware">
                    <Cookware></Cookware>
                </Route>
                <Route path="/" element={<Login />} />

                
                <Route path="/computer">
                    <Computer></Computer>
                </Route>
                <Route path="/" element={<Login />} />

                
                <Route path="/gaming">
                    <Gaming></Gaming>
                </Route>
                <Route path="/" element={<Login />} />

                
                <Route path="/cart">
                    <Cart></Cart>
                </Route>
                <Route path="/" element={<Login />} />

                
                <Route path="/profile">
                    <Profile></Profile>
                </Route>
                <Route path="/" element={<Login />} />

                
                <Route path="/logout">
                    <Logout></Logout>
                </Route>
                <Route path="/" element={<Login />} />

                
                <Route path="/detailspage">
                    <Detailspage></Detailspage>
                </Route>
                <Route path="/" element={<Login />} />

                
                <Route path="/payment">
                    <Payment></Payment>
                </Route>
                <Route path="/" element={<Login />} />

                
                <Route path="/forget">
                    <Forgetpassword></Forgetpassword>
                </Route>
                <Route path="/" element={<Login />} />

                
                <Route path="/changepassword">
                    <ChangePassword></ChangePassword>
                </Route>
                <Route path="/" element={<Login />} /> */}



                {/* <Footer></Footer> */}
            </UserContext.Provider>
        </>
    )
};


export default App;