
import './App.css';
import React, { useState } from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import Additem from './Additem';

import {AppBar, Toolbar,Typography,Grid} from "@material-ui/core"

import { makeStyles } from "@material-ui/core";

 
function App() {

  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleCart = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {   
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };
  
  return (



    
    <React.Fragment>
  
      <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <Cart handleCart={handleCart}    />
      ) : (
        <Additem cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
     
    </React.Fragment>
  );
}

export default App;
