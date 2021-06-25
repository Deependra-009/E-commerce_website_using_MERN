import React, { useContext } from 'react';
import { UserContext } from './App';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import './../CSS/bookproduct.css';


const Detailspage = () => {
    const { bookproduct } = useContext(UserContext);
    console.log(bookproduct);
    return (
        <>
            <div className="bookpage">
                <div className="bookcards">
                    <div className="bookcard">
                        <div className="bookcard_img_laptop"><img src={bookproduct.imgsrc} alt="" ></img></div>
                        <div className="bookcard_info1">
                            <h3 className="bookcard_title">{bookproduct.cname}</h3>
                            <ul>
                                {

                                    bookproduct.list.map((val) => {
                                        return (
                                            <li>{val.l}</li>
                                        )
                                    })

                                }
                            </ul>
                        </div>
                        <div className="bookcard_book">
                            <div className="bookprice">{bookproduct.price}</div>
                            <button style={{ marginRight: "10px" }} id="b1"><FlashOnIcon style={{ fontSize: "30px" }}></FlashOnIcon>Book</button>
                            <button style={{ marginRight: "10px" }} id="b2"><AddShoppingCartIcon style={{ fontSize: "30px" }}></AddShoppingCartIcon>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detailspage;