import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  CardActions,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";
import { useDispatch } from "react-redux";

import { addToCart } from "../../../redux";
import { Link, useLocation } from "react-router-dom";

const Product = ({ product }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  let itemToAdd = { id: product.id, quantity: 1 };
  const onAddToCart = () => {
    dispatch(addToCart(itemToAdd));
  };

  const location = useLocation();

  let to =
    window.location.pathname.length <= 1
      ? window.location.pathname + product.id
      : `${window.location.pathname}/${product.id}`;

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.mediaWrapper}>
        <CardMedia
          className={classes.media}
          component={Link}
          to={{
            pathname: to,
            state: { prevPath: location.pathname },
          }}
          image={product.image.url}
          title={product.name}
        />
      </CardActionArea>
      <CardContent className={classes.cardContent}>
        <div className={classes.cardContentHeader}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <IconButton aria-label="Add to Cart" onClick={onAddToCart}>
          <AddShoppingCart />
        </IconButton>
        </div>
        <Typography
          className={classes.cardContentBody}
          dangerouslySetInnerHTML={{ __html: product.description }}
          variant="body2"
          color="textSecondary"
        ></Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <Typography variant="h5">
          {product.price.formatted_with_symbol}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default Product;
