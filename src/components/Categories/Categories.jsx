import React from "react";
import { Link } from "react-router-dom";
import {
  createTheme,
  Box,
  ImageListItem,
  ImageListItemBar,
  ThemeProvider,
} from "@material-ui/core";

import useStyles from "./styles";
import { TEXT_QUANTITY } from "./constants";

// using Grid for the styling
// import { Grid } from '@material-ui/core';
// import Category from './Category';

const CategoryList = ({ categories }) => {
  // console.log(ImageListItem.the);
  const classes = useStyles();

  const theme = createTheme({
    breakpoints: {
      values: {
        mobile: 0,
        bigMobile: 350,
        tablet: 650,
        desktop: 900,
      },
    },
  });

  const boxToImgList = {
    height: "auto",
    display: "grid",
    gap: "2rem",
    gridTemplateRows: "repeat(50%)",
    gridTemplateColumns: {
      bigMobile: "repeat(1, 1fr)",
      tablet: "repeat(2, 1fr)",
      desktop: "repeat(3, 1fr)",
    },
  };

  const liStyles = {
    display: "flex",
    flexDirection: "column",
    minHeight: "max-content",
  };

  const imgStyles = {
    width: "100%",
  };
  return (
    <ThemeProvider theme={theme}>
      <Box sx={boxToImgList} className={classes.imageList}>
        {categories &&
          categories.map((category, index) => {
            // const picNumByCategoryName = CATEGORY_PICS.indexOf(category.slug);
            return (
              // cols for the item determins how many columns the item can take up in that row
              <ImageListItem
                style={liStyles}
                key={category.id}
                component={Link}
                cols={1}
                to={
                  category.slug
                    ? `${window.location.pathname}/${category.slug}`
                    : "/whatever"
                }
              >
                <img
                  style={imgStyles}
                  src={category.description}
                  alt={category.id}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={category.slug}
                  subtitle={category.products + TEXT_QUANTITY}
                />
              </ImageListItem>
            );
          })}
      </Box>
    </ThemeProvider>
    // <Grid container spacing={5}>
    //     {categories.length && categories.map(item => {
    //       return(
    //         <Grid item key={item.id} xs={12} md={4} lg={3}>
    //           <Category item={item} />
    //         </Grid>
    //       )
    //     })}
    //   </Grid>
  );
};

export default CategoryList;
