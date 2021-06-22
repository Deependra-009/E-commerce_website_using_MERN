import React,{useEffect,useState} from 'react'
import {useHistory} from 'react-router-dom';
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
            <form method="GET">
                <h1>{userData.name}</h1>
                <h2>{userData.email}</h2>
                <h3>{userData._id}</h3>
            </form>
        </>
    )
};

export default Profile;