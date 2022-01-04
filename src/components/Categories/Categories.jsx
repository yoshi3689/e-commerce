import React from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Typography,
} from "@material-ui/core";

import useStyles from "./styles";
import { TEXT_QUANTITY } from "./constants";

const Categories = ({ categories }) => {
  const classes = useStyles();

  return (

    <Grid container className={classes.container} spacing={3}> 
      {categories && categories.map(category => {
        console.log(category)
        return (
          <Grid item container justifyContent="center" direction="column" 
            className={classes.item}
            key={category.id} component={Link} xs={12} sm={6} md={4} 
            to={category.slug
              ? `${window.location.pathname}/${category.slug}`
              : "/whatever"
            }
          >
              <img
                className={classes.itemImg}
                src={category.assets[0].url}
                alt={category.id}
                loading="lazy"
              />
              <Typography className={classes.itemText} align="center" variant="h4" component="h4" >{category.slug}</Typography>
              <Typography className={classes.itemText} align="center" variant="body1" component="p">{category.products + TEXT_QUANTITY}</Typography>
            </Grid>
        )
      })}
    </Grid>
  );
};

export default Categories;
