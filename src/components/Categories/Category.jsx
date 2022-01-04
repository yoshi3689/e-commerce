import React from 'react'
import { Card,CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from '../Products/Product/styles'

const Category = ({ item }) => {

  const classes = useStyles();

  return (
    <Card className={classes.root} >
      <CardActionArea className={classes.mediaWrapper} >
      <CardMedia 
        className={classes.media} 
        component={Link} 
        image={item.image.url} 
        title={item.name} />
      </CardActionArea>
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {item.name}
          </Typography>
          <Typography variant="h5">
            {item.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: item.description }} variant="body2" color="textSecondary"></Typography>
      </CardContent>
    </Card>
  )
}

export default Category
