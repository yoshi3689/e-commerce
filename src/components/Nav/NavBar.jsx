import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { AppBar, Toolbar, IconButton, MenuItem, Menu, Badge, Typography } from '@material-ui/core'
import { ShoppingCart, Sports } from '@material-ui/icons'
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
       <Toolbar>
         <div>
          <IconButton component={Link} to="/" color="inherit">
            <Sports fontSize="large" className={classes.logo}/>
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