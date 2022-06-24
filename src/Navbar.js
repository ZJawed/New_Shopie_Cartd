import React from "react";
import './Navbar.css';

import {AppBar, Toolbar,Typography,Grid} from "@material-ui/core"

// import { makeStyles } from "@material-ui/core";

// const useStyles = makeStyles(()=>({
//   // typographyStyles:{
//   //   flex :1,
  
//   // }
// }))


const Navbar = (props) => {
  const { setShow, size} = props

  // const classes = useStyles();
  return (

    
    <AppBar style={{backgroundColor:"Black"}}>
    <Toolbar>

      
  
      <Grid className="nav-box">
        <span className="my_shop" onClick={() => setShow(true)}>
        <Typography   id="my_shop" > <span className="span" >  CartShoppe </span> </Typography> 
        </span>
 
        <Grid className="cart" onClick={() => setShow(false)}>
          <span>
            <i className="fa fa-cart-plus"></i>
          </span>
          <span>{size}</span>
        </Grid>
      </Grid>
      </Toolbar>
    </AppBar>

  );
};

export default Navbar;
