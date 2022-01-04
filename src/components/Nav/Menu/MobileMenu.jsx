import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IconButton, MenuItem, Menu, Badge, Typography, Hidden } from '@material-ui/core';
import { ShoppingCart, MenuOutlined } from '@material-ui/icons';
import useStyles from "./styles"

const MobileMenu = ({ isOnCart, totalItems, pathname, isOnRoute, menuItems, checkoutMenuItem }) => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleMenu = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  }
  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  const classes = useStyles();
  
  useEffect(() => {
    handleMobileMenuClose();
  }, [pathname]);

  const renderMobileHamburger = (
    <IconButton component={"button"} onClick={handleMenu} aria-label="toggle menu" color="inherit" >
      <Badge badgeContent={!isOnCart ? totalItems : 0} color="secondary">
        <MenuOutlined />
      </Badge>
    </IconButton>
  );

  const renderMobileMenuItem = (content, to) => (
    <MenuItem key={to} divider className={classes.mobileMenuItem} component={Link} to={to} >
      {content}
    </MenuItem>
  );
  const renderMobileMenu = (
    <Menu style={{ top: "50px" }} anchorEl={mobileMoreAnchorEl} anchorOrigin={{ vertical: "top", horizontal: "right" }} open={isMobileMenuOpen} onClose={handleMobileMenuClose}>
      {(totalItems > 0 && !isOnCart) && (
        <MenuItem divider className={classes.mobileMenuItem} component={Link} to="/cart" >
          <Badge badgeContent={totalItems} color="secondary">
            <ShoppingCart />
          </Badge>
          <Typography>Cart</Typography>
        </MenuItem>
      )}
      {totalItems > 0 && renderMobileMenuItem(checkoutMenuItem.content, checkoutMenuItem.to)}
      {menuItems.map(item => !isOnRoute(item.to) && (
        renderMobileMenuItem(item.content, item.to)
        ))
      }
    </Menu>
  );
  return (
    <Hidden smUp>
      <div className={classes.menuContainer} >
        {renderMobileMenu}
      </div>
      <div className={classes.buttons}>
        {renderMobileHamburger}
      </div>
    </Hidden>
  )
}

export default MobileMenu
