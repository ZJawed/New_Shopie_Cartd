import React from "react";

import {Container,Grid,Button,Typography, CardContent,Card,CardActions,CardActionArea,CardMedia,CardHeader } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"; 




import SaveIcon from '@material-ui/icons/Save';


const useStyles = makeStyles((theme)=>({
  root:{
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.grey[200],
    paddingTop: theme.spacing(5)
  },
  button: {
    margin: theme.spacing(),
    backgroundColor: "Green"
  },
}))


export const Item = ({ currItem, handleCart }) => {
  const { title, description, img, price,title2, } = currItem;

 

const classes = useStyles();
  return (
    
    <>
    <Container id="cards"  classes={classes.root}>
     <Grid container spacing={4} >
      <Grid item sm={12}>
     <Card variant="outlined"  >
     <CardHeader title={title}  subheader={title2}  />
     <CardActionArea>
     <CardMedia  id="image_box" image={img} style={{height:260 }   }   />
     <CardContent  id="details" >
      <Typography   variant="h4" > {title}  </Typography>
      <Typography   variant="subtitle1" > About :- { description} </Typography>
      <Typography   variant="h6" > "₹{price}"  </Typography>
      </CardContent>

     </CardActionArea>

      <CardActions>
      {/* <button onClick={() => handleCart(currItem)}>Add to Cart</button> */}
      
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
        onClick={() => handleCart(currItem)}
      >
       Add To Cart
      </Button>
      
      </CardActions>
     </Card>

      </Grid>
     </Grid>
    </Container>
{/*     
      <div className="item-info">
        <div className="product-img">
          <img src={img} alt="imgerror" />
        </div>

        <div className="Title">
          <p>{title}</p>
          <p>{description}</p>
        </div>

        <div className="price">
          <h3> Price - {price}Rs</h3>
          <p></p>
          <button onClick={() => handleCart(currItem)}>Add to Cart</button>
        </div>
      </div> */}
      
    </>
  );
};

export default Item;
