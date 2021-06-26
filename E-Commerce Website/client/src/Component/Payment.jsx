import React,{useContext} from 'react'
import { UserContext } from './App';

const Payment=()=>{
    const { paymentprice} = useContext(UserContext);
    return(
        <>
            <h1>{paymentprice}</h1>
        </>

    )
}

export default Payment;