import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AppBar, Toolbar, Button, Typography, } from '@material-ui/core';
import { LocalFlorist } from '@material-ui/icons';

import MobileMenu from './Menu/MobileMenu';
import DesktopMenu from './Menu/DesktopMenu';
import useStyles from './styles';
import { CHECKOUT_ITEM, MENU_ITEMS } from './constants';

const NavBar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();
  const [isOnCart, setIsOnCart] = useState(null);

  const isOnRoute = (route) => {
    return route === location.pathname;
  }

  const handleRouteChange = (location) => {
    if(location.pathname === "/cart") {
      setIsOnCart(true);
    } else {
      setIsOnCart(false);
    }
  }

  useEffect(() => {
    handleRouteChange(location);
  }, [location]);

  return (
    <>
     <AppBar position="fixed" className={classes.appBar} color="inherit">
       <Toolbar className={classes.toolBar2} >
          <Button className={classes.logoButton} component={Link} to="/" color="inherit">
            <Typography className={classes.title} variant="h5" align='center' >
              ClothIt
            </Typography>
            <LocalFlorist fontSize="medium" className={classes.logo}/>
          </Button>
          <DesktopMenu isOnCart={isOnCart} totalItems={totalItems} pathname={location.pathname} isOnRoute={isOnRoute} menuItems={MENU_ITEMS} checkoutMenuItem={CHECKOUT_ITEM} />
          <MobileMenu isOnCart={isOnCart} totalItems={totalItems} pathname={location.pathname} isOnRoute={isOnRoute} menuItems={MENU_ITEMS} checkoutMenuItem={CHECKOUT_ITEM} />
       </Toolbar>
     </AppBar>
     <div className={classes.toolbar} />
    </>
  )
}

export default NavBar