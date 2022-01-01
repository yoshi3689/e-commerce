import React, { useEffect } from "react";
import { fetchCategories, fetchProducts } from "../../redux";
import { useSelector, useDispatch } from "react-redux";
import { ELEMENTS_HOME } from "./constants";
const withFetchProducts =
  (WrappedComponent) =>
  ({ ...props }) => {
    // const classes = useStyles();
    const dispatch = useDispatch();
    const { products, categories } = useSelector((state) => state.products);
    useEffect(() => {
      dispatch(fetchCategories());
      dispatch(fetchProducts());
    }, [dispatch]);
    return (
      products && (
        <WrappedComponent
          {...props}
          products={products}
          categories={categories}
          btns={window.location.pathname === "/" ? ELEMENTS_HOME.btns : null}
          titleText={window.location.pathname === "/" ? "All Products" : ""}
        />
      )
    );
  };

// I have to take the main tag out later when I start rendering other components than products
export default withFetchProducts;
