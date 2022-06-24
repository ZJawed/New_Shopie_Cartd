import React, { useEffect, useState } from "react";
import './Additem.css';

import {Grid,Typography,} from "@material-ui/core"

const Additem = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <Grid>
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <Grid className="cart_img">
            <img src={item.img} alt="" />
            <p> <Typography> {item.title}</Typography></p>
            <span className="price">    "₹ {item.price}"</span>
          </Grid>

          <Grid>
          <button onClick={() => handleChange(item, -1)}>-</button>
          <button>{item.amount}</button>
            <button onClick={() => handleChange(item, 1)}>+</button>
           
            
          </Grid>

          <Grid>
           
            <button onClick={() => handleRemove(item.id)}> Remove</button>
          </Grid>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>: Rs-{price}</span>
      </div>
    </article>
    </Grid>
  );
};

export default Additem;
