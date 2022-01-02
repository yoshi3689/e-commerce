import React, { useEffect } from "react";
import { fetchCategories, fetchProducts } from "../../redux";
import { useSelector, useDispatch } from "react-redux";

const withFetchProducts =
  (WrappedComponent) =>
  ({ ...props }) => {
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
        />
      )
    );
  };

export default withFetchProducts;
