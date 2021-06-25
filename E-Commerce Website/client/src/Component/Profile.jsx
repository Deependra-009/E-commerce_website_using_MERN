import React,{useEffect,useState} from 'react'
import {useHistory} from 'react-router-dom';
import './../CSS/profile.css';
const Profile=()=>{
    const history=useHistory();
    const [userData,setuserData]=useState({});


    const callProfilePage = async ()=>{
        try{

            const res = await fetch('/profile',{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                    
                },
                credentials:"include"
            });

           const data=await res.json();
           
           console.log(data);
           setuserData(data);

           if(!res.status===200){
                const error = new Error(res.error);
                throw error;
           }




        }
        catch(err){
            console.log("----");
            console.log(err);
            history.push('/login');
        }
    }



    useEffect(() => {
        
        callProfilePage();
       
    }, []);

      




    return(
        <>
            <div className="profilepage">
                <div className="profilebox">
                    <div className="profilebox1">
                        <img src="images/logo.jpg"></img>
                    </div>
                    <div className="profilebox2">
                        {/* <div className="profiledetails">
                            <h3>Name - <span>{userData.name}</span></h3>
                        </div>
                        <div className="profiledetails">
                            <h3>Email - <span>{userData.email}</span></h3>
                        </div>
                        <div className="profiledetails">
                            <h3>Phone No - <span>{userData.phone}</span></h3>
                        </div> */}
                        <table>
                            <tr>
                                <td>Username</td>
                                <td className="profiledetails"><span>{userData.name}</span></td>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td className="profiledetails"><span>{userData.name}</span></td>
                            </tr>
                            <tr>
                                <td>E-mail</td>
                                <td className="profiledetails"><span>{userData.email}</span></td>
                            </tr>
                            <tr>
                                <td>Phone No</td>
                                <td className="profiledetails"><span>{userData.phone}</span></td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td className="profiledetails"><span>{userData.name}</span></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Profile;