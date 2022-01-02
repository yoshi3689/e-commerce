import React, { useEffect } from "react";
import { fetchCategories } from "../../redux";
import { useSelector, useDispatch } from "react-redux";

const withFetchCategories = (WrappedComponent) =>({ ...props }) => {
  const dispatch = useDispatch();
  const { products, categories } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <WrappedComponent
      {...props}
      products={products}
      categories={categories}
    />
    );
  };

// I have to take the main tag out later when I start rendering other components than products
export default withFetchCategories;
