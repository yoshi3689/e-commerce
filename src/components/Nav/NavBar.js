import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { AppBar, Toolbar, IconButton, MenuItem, Menu, Badge, Typography } from '@material-ui/core'
import { ShoppingCart, Sports } from '@material-ui/icons'
import useStyles from './styles';
const NavBar = (props) => {
  const classes = useStyles();
  const location = useLocation();
  const [isOnHome, setIsOnHome] = useState(null);
  // console.log(props, location)
  const handleRouteChange = (location) => {
    if(location.pathname.includes('cart')) {
      setIsOnHome(false);
    } else {
      setIsOnHome(true);
    }
  }
  useEffect(() => {
    handleRouteChange(location);
  }, [location])
  return (
    <>
     <AppBar position="fixed" className={classes.appBar} color="inherit">
       <Toolbar>
         <div>
          <IconButton component={Link} to="/" color="inherit">
            <Sports fontSize="large" className={classes.image}/>
          </IconButton>
          {/* <img src="/img/redsnewker.jpg" alt="commerce.js" height="25px" className={classes.image}></img> */}
          <Typography className={classes.title} component={Link} to="/" variant="h6">
            commerce.js
          </Typography>
         </div>
        <div className={classes.grow}/>
        <div className={classes.button}>
        {isOnHome && (
          <IconButton component={Link} to="/cart" aria-label="show cart item" color="inherit">
          <Badge badgeContent={props.badgeNum} color="secondary">
            <ShoppingCart/>
          </Badge>
        </IconButton>
        )}
        </div>

       </Toolbar>
     </AppBar>
    </>
  )
}

export default NavBar
