import React from 'react'

//when passing a prop to a HOC, you dont need to destructure the props object
const withSortByCategory = (WrappedComponent) => ({ ...props }) => {

  const filter = props.customFilter;
  const sortedProducts = props.products.length > 1 
    && props.products.filter(product =>
        product.categories.find(category => 
          category.slug.includes(filter)));

  props.products = sortedProducts;
  
  return <WrappedComponent {...props} />;
}

export default withSortByCategory;