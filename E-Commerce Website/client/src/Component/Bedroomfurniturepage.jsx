import React from 'react'
import Detailsbox from './Detailsbox';
import {Bedroomfurniture} from './../Data/Homedecorcards';
import {Laptopcard} from './Card';

const Bedroomfurniturepage=()=>{
    return (
        <>
            <Detailsbox></Detailsbox>
            <div className="mobilespage">
                <div className="pageheading">
                    <h1>Television</h1>
                </div>
                <div>
                    {
                        Bedroomfurniture.map((val) => {
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

export default Bedroomfurniturepage;