import React from 'react'
                          //when passing a prop to a HOC, you dont need to destructure the props object
const withSortByCategory = (WrappedComponent) => ({ ...props }) => {
  //I'm wondering why .slice(n, -1) cannot get the last letter of a string

  const sortedProducts = props.products && props.products.filter(product => 
    product.categories.find(category => {
      // this line above wa not working because i was using .forEAch which does not return any value 
      return category.slug.includes(props.location.pathname.slice(12, -1) + props.location.pathname.slice(-1));
    }
    )
  );
  props.products = sortedProducts;
  
  return <WrappedComponent {...props} />;
}

export default withSortByCategory