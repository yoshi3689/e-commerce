import React from 'react'
import { Link } from 'react-router-dom'
import { IconButton, Badge, Hidden, Grid, Button  } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import useStyles from "./styles"

const DesktopMenu = ({ totalItems, menuItems, isOnRoute, isOnCart, checkoutMenuItem }) => {
  const classes = useStyles();

  const renderDesktopCartBtn = (
    <IconButton component={Link} to="/cart" aria-label="show cart item" color="inherit">
      <Badge badgeContent={totalItems} color="secondary">
        <ShoppingCart className={classes.icon} />
      </Badge>
    </IconButton>
  );

  const renderDesktopMenuItem = (content, to) => (
    <Grid item key={to} className={classes.menuItemWrapper} >
      <Button component={Link} to={to}>
        {content}
      </Button>
    </Grid>
  );

  const renderDesktopMenu = (
      <Grid className={classes.menuWrapper} container wrap="nowrap" >
      {(totalItems > 0 && !isOnCart && !isOnRoute(checkoutMenuItem.to)) && renderDesktopMenuItem(checkoutMenuItem.content, checkoutMenuItem.to)}
      {menuItems.map(item => !isOnRoute(item.to) && (
        renderDesktopMenuItem(item.content, item.to)
        ))
      }
    </Grid>
  );

  return (
    <Hidden xsDown>
      <div className={classes.menuContainer} >
        {renderDesktopMenu}
      </div>
      {!isOnCart ? (
      <div className={classes.buttons}>
        {renderDesktopCartBtn}
      </div>
      )
      : <div />
    }
    </Hidden>
  )
}

export default DesktopMenu
