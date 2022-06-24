import Item from "./Item";
import { product } from "./Product";
import "./Cart.css"
import {Grid,Typography,} from "@material-ui/core"


const Cart = ({ handleCart, size }) => {
  return (
  <>
          <Grid>   
        <Typography id="heading"  variant="h2" style={{color:"blue"}} > Shoping <span style={{color:"Yellow"}} >Cart[ ]</span> </Typography>
        <p id="paragraph" >
          <Typography  style={{color:"darkgrey", fontSize:"18px" }}  className="totalItemCout">The products on this list were the most trending products<br/> and categories on the Shopify platform</Typography>
        </p>
        </Grid>

        <Grid>
        <section className="maincart ">
        {product.map((currItem) => (
          <Item key={currItem.id} currItem={currItem} handleCart={handleCart} />
        ))}

        {/* {product.map((currItem) => {
            return (
              <Item
                key={currItem.id}
                {...currItem}
                currItem={currItem}
                handleCart={handleCart}
              />
            );
          })} */}
      </section>
      </Grid>
      </>
  );
};

export default Cart;
