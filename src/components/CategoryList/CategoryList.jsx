import React from 'react'
import { Link } from 'react-router-dom'
import { ImageList, ImageListItem, ImageListItemBar } from '@material-ui/core'; 

import withFetchCategories from '../HOC/withFetchCategories';
import useStyles from './styles'
import { TEXT_QUANTITY } from './constants';


const CategoryList = ({ categories }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList rowHeight={300} className={classes.imageList} cols={3} >
        {categories && categories.map((category, index) =>  {
          // const picNumByCategoryName = CATEGORY_PICS.indexOf(category.slug);
          return(
            <ImageListItem key={category.id} cols={category.cols || 3} component={Link} to={category.slug ? `${window.location.pathname}/${category.slug}` : '/whatever'} >
             <img src={category.description} alt={category.id} />
             <ImageListItemBar
              title={category.slug}
              subtitle={category.products + TEXT_QUANTITY}
             />
           </ImageListItem>
         )
        })}
      </ImageList>
    </div>
  )
}

export default withFetchCategories(CategoryList);
