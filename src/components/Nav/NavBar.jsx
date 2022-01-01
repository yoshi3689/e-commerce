import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { AppBar, Toolbar, IconButton, Button ,MenuItem, Menu, Badge, Typography } from '@material-ui/core'
import { ShoppingCart, LocalFlorist } from '@material-ui/icons'
import useStyles from './styles';

const NavBar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();
  const [isOnHome, setIsOnHome] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

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
  
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  const mobileMenuId = 'primary-search-account-menu-mobile';

  const renderMobileMenu = (
    <Menu anchorEl={mobileMoreAnchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} id={mobileMenuId} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={isMobileMenuOpen} onClose={handleMobileMenuClose}>
      <MenuItem>
        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
          <Badge badgeContent={totalItems} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
     <AppBar position="fixed" className={classes.appBar} color="inherit">
       <Toolbar className={classes.toolBar2} >
          <Button component={Link} to="/" color="inherit">
            <Typography className={classes.title} variant="h5" align='center' >
              ClothIt
            </Typography>
            <LocalFlorist fontSize="medium" className={classes.logo}/>
          </Button>
          {/* <img src="/img/redsnewker.jpg" alt="commerce.js" height="25px" className={classes.image}></img> */}
          
        <div className={classes.grow}/>
        <div className={classes.button}>
        {isOnHome && (
          <IconButton component={Link} to="/cart" aria-label="show cart item" color="inherit">
          <Badge badgeContent={totalItems} color="secondary">
            <ShoppingCart/>
          </Badge>
        </IconButton>
        )}
        </div>
        {renderMobileMenu}
       </Toolbar>
     </AppBar>
     <div className={classes.toolbar} />
    </>
  )
}

export default NavBar