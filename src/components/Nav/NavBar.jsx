import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { AppBar, Toolbar, IconButton, Button ,MenuItem, Menu, Badge, Typography, Hidden, List, ListItem } from '@material-ui/core'
import { ShoppingCart, LocalFlorist, MenuOutlined, ShoppingBasket, Home, Category } from '@material-ui/icons'
import useStyles from './styles';

const NavBar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();
  const [isOnCart, setIsOnCart] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const handleRouteChange = (location) => {
    if(location.pathname === "/cart") {
      setIsOnCart(true);
    } else {
      setIsOnCart(false);
    }
  }
  useEffect(() => {
    handleRouteChange(location);
    handleMobileMenuClose();
  }, [location])
  
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMenu= (event) => {
    setMobileMoreAnchorEl(event.currentTarget.parentElement.parentElement.parentElement);
  }
  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  // const mobileMenuId = 'primary-search-account-menu-mobile';

  const menuItemContents = {
    home: (
      <>
        <Home />
        <Typography>Home</Typography>
      </>
    ),
    checkout : (
      <>
        <ShoppingBasket />
          <Typography>Checkout</Typography>
      </>
    ),
    categories: (
      <>
        <Category />
        <Typography>Categories</Typography>
      </>
    ),
    cart: (
      <>
        <Badge badgeContent={totalItems} color="secondary">
        <ShoppingCart />
        </Badge>
        <Typography>Cart</Typography>
      </>
    ),
    
  }


  const renderIndividualCartBtn = (
    <Hidden xsDown>
      <IconButton component={Link} to="/cart" aria-label="show cart item" color="inherit">
        <Badge badgeContent={totalItems} color="secondary">
          <ShoppingCart/>
        </Badge>
      </IconButton>
    </Hidden>
  );

  const renderMenu = (
    <Hidden xsDown>
      <List className={classes.menuWrapper} disablePadding component="ul" >
      {totalItems > 0 &&
        <ListItem component={Link} to="/checkout" className={classes.menuItemWrapper} >
            {menuItemContents.checkout}
        </ListItem>
      }
      <ListItem component={Link} to="/categories" className={classes.menuItemWrapper} >
        {menuItemContents.categories}
      </ListItem>
      <ListItem component={Link} to="/" className={classes.menuItemWrapper} >
        {menuItemContents.home}
      </ListItem>
    </List>
    </Hidden>
  )
  const renderMobileMenu = (
    <Hidden smUp>
      <Menu style={{ top: "50px" }} anchorEl={mobileMoreAnchorEl} anchorOrigin={{ vertical: "top", horizontal: "right" }} open={isMobileMenuOpen} onClose={handleMobileMenuClose}>
        {!isOnCart && (
          <MenuItem divider className={classes.mobileMenuItem} component={Link} to="/cart" >
            {menuItemContents.cart}
          </MenuItem>
        )}
      {totalItems > 0 && (
        <MenuItem divider className={classes.mobileMenuItem} component={Link} to="/checkout" >
          {menuItemContents.checkout}
        </MenuItem>
      )}
        <MenuItem divider className={classes.mobileMenuItem} component={Link} to="/" >
          {menuItemContents.home}
        </MenuItem>
        <MenuItem divider className={classes.mobileMenuItem} component={Link} to="/categories" >
          {menuItemContents.categories}
        </MenuItem>
    </Menu>
    </Hidden>
  );

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
          {/* <img src="/img/redsnewker.jpg" alt="commerce.js" height="25px" className={classes.image}></img> */}
          <div className={classes.menuContainer} >
            {renderMenu}
          </div>
          {renderMobileMenu}
          <div className={classes.buttons}>
            <Hidden smUp>
            <IconButton component={"button"} onClick={handleMenu} aria-label="toggle menu" color="inherit" >
              <Badge badgeContent={!isOnCart ? totalItems : 0} color="secondary">
                <MenuOutlined />
              </Badge>
            </IconButton>
            </Hidden>
          {!isOnCart && renderIndividualCartBtn}
        </div>
       </Toolbar>
     </AppBar>
     <div className={classes.toolbar} />
    </>
  )
}

export default NavBar