import React, { useState ,useContext } from 'react'
import './../CSS/card.css';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {UserContext} from './App';


const UploadData = async (arg) => {
    let quantity = 1,id=0;
    try {
        const res = await fetch('/addtocart', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: id,
                name: arg.cname,
                image: arg.imgsrc,
                price: arg.price,
                quantity: quantity
            })
        });
        if (res.status === 400) {
            console.log("error");
        }
        else {
            console.log("success")
        }
    }
    catch (err) {
        console.log(err);
    }
}



const Card = (props) => {





    return (
        <>
            <div className="cards">
                <div className="card">
                    <div className="card_img"><img src={props.imgsrc} alt="" ></img></div>
                    <div className="card_info1">
                        <h3 className="card_title">{props.cname}</h3>
                        <ul>
                            <li>{props.list.l1}</li>
                            <li>{props.list.l2}</li>
                            <li>{props.list.l3}</li>
                            <li>{props.list.l4}</li>
                            <li>{props.list.l5}</li>
                        </ul>
                    </div>
                    <div className="card_book">
                        <div className="price">{props.price}</div>
                        <button style={{ marginRight: "10px" }} id="b1"  ><FlashOnIcon style={{ fontSize: "30px" }}></FlashOnIcon>Book</button>
                        <button style={{ marginRight: "10px" }} id="b2" onClick={() => UploadData(props)}  ><AddShoppingCartIcon style={{ fontSize: "30px" }}></AddShoppingCartIcon>Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
};

const Laptopcard = (props) => {
    return (
        <>
            <div className="cards">
                <div className="card">
                    <div className="card_img_laptop"><img src={props.imgsrc} alt="" ></img></div>
                    <div className="card_info1">
                        <h3 className="card_title">{props.cname}</h3>
                        <ul>
                            {

                                props.list.map((val) => {
                                    return (
                                        <li>{val.l}</li>
                                    )
                                })

                            }
                        </ul>
                    </div>
                    <div className="card_book">
                        <div className="price">{props.price}</div>
                        <button style={{ marginRight: "10px" }} id="b1" ><FlashOnIcon style={{ fontSize: "30px" }}></FlashOnIcon>Book</button>
                        <button style={{ marginRight: "10px" }} id="b2" onClick={() => UploadData(props)} ><AddShoppingCartIcon style={{ fontSize: "30px" }}></AddShoppingCartIcon>Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}


const Fridgecard = (props) => {
    return (
        <>
            <div className="cards">
                <div className="card">
                    <div className="card_img_fridge"><img src={props.imgsrc} alt="" ></img></div>
                    <div className="card_info1">
                        <h3 className="card_title">{props.cname}</h3>
                        <ul>
                            {

                                props.list.map((val) => {
                                    return (
                                        <li>{val.l}</li>
                                    )
                                })

                            }
                        </ul>
                    </div>
                    <div className="card_book">
                        <div className="price">{props.price}</div>
                        <button style={{ marginRight: "10px" }} id="b1" ><FlashOnIcon style={{ fontSize: "30px" }}></FlashOnIcon>Book</button>
                        <button style={{ marginRight: "10px" }} id="b2" onClick={() => UploadData(props)} ><AddShoppingCartIcon style={{ fontSize: "30px" }}></AddShoppingCartIcon>Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}





const Wmcard = (props) => {
    return (
        <>
            <div className="cards">
                <div className="card">
                    <div className="card_img_fridge"><img src={props.imgsrc} alt="" ></img></div>
                    <div className="card_info1">
                        <h3 className="card_title_wm">{props.cname}</h3>
                        <ul>
                            {

                                props.list.map((val) => {
                                    return (
                                        <li>{val.l}</li>
                                    )
                                })

                            }
                        </ul>
                    </div>
                    <div className="card_book">
                        <div className="price">{props.price}</div>
                        <button style={{ marginRight: "10px" }} id="b1" ><FlashOnIcon style={{ fontSize: "30px" }}></FlashOnIcon>Book</button>
                        <button style={{ marginRight: "10px" }} id="b2" onClick={() => UploadData(props)} ><AddShoppingCartIcon style={{ fontSize: "30px" }}></AddShoppingCartIcon>Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}


const Foodcard = (props) => {
    return (
        <>
            <div className="cards">
                <div className="card">
                    <div className="card_img_food"><img src={props.imgsrc} alt="" ></img></div>
                    <div className="card_info1">
                        <h3 className="card_title_wm">{props.cname}</h3>
                        <ul>
                            {

                                props.list.map((val) => {
                                    return (
                                        <li>{val.l}</li>
                                    )
                                })

                            }
                        </ul>
                    </div>
                    <div className="card_book">
                        <div className="price">{props.price}</div>
                        <button style={{ marginRight: "10px" }} id="b1" ><FlashOnIcon style={{ fontSize: "30px" }}></FlashOnIcon>Book</button>
                        <button style={{ marginRight: "10px" }} id="b2" onClick={() => UploadData(props)} ><AddShoppingCartIcon style={{ fontSize: "30px" }}></AddShoppingCartIcon>Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}




export default Card;
export { Laptopcard, Fridgecard, Wmcard, Foodcard };