import React from 'react'
                          //when passing a prop to a HOC, you dont need to destructure the props object
const withSortByCategory = (WrappedComponent) => ({ ...props }) => {
  console.log(props.additionalFilter , props.products, )
  const filterWord = props.location.pathname.slice(12, -1) + props.location.pathname.slice(-1);
  const sortedProducts = props.products.length > 1 && props.products.filter(product => 
    product.categories.find(category => {
      return filterWord === "/"
      ? category.slug.includes("featured") 
      : category.slug.includes(filterWord);
    }
    )
  );
  props.products = sortedProducts;
  
  return <WrappedComponent {...props} />;
}

export default withSortByCategory;