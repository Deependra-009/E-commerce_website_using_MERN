import React, { useContext } from "react";
import { CartContext } from "./Cart";
import Plus from '@material-ui/icons/Add';
import Minus from '@material-ui/icons/Minimize';
import DeleteIcon from '@material-ui/icons/Delete';

const Items = ({ id, description, title, img, price, quantity }) => {
  const { removeItem, increment, decrement } = useContext(CartContext);

  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={img} alt="iamge" />
        </div>

        <div className="title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="add-minus-quantity">
          <Minus style={{fontSize:"30px",marginBottom:"18px",cursor:"Pointer"}} onClick={() => decrement(id)}></Minus>
          <input type="text" placeholder={quantity} disabled />
          <Plus style={{fontSize:"30px",marginBottom:"0px",cursor:"Pointer"}}onClick={() => increment(id)}></Plus>
        </div>

        <div className="price">
          <h3>{price}₹</h3>
        </div>

        <div className="remove-item">
          <DeleteIcon style={{fontSize:"30px",cursor:"pointer"}} className="fas fa-trash-alt remove"
            onClick={() => removeItem(id)}></DeleteIcon>
        </div>
      </div>

      <hr />
    </>
  );
};

export default Items;