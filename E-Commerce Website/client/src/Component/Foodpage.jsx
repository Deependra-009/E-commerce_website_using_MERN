import React from 'react'
import Detailsbox from './Detailsbox';
import {Food} from '../Data/Beautycards';
import {Laptopcard} from './Card';

const Foodpage=()=>{
    return (
        <>
            <Detailsbox></Detailsbox>
            <div className="mobilespage">
                <div className="pageheading">
                    <h1>Foods </h1>
                </div>
                <div >
                    {
                        Food.map((val) => {
                            return (
                                <Laptopcard id={val.id} imgsrc={val.image} cname={val.name} list={val.list}></Laptopcard>
                            )
                        })
                    }
                </div>
            </div> 
        </>
    )
}

export default Foodpage;