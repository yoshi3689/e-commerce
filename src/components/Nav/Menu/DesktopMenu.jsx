import React from 'react'
import { Link } from 'react-router-dom'
import { IconButton, Badge, Hidden, List, ListItem  } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import useStyles from "./styles"

const DesktopMenu = ({ totalItems, menuItems, isOnRoute, isOnCart, checkoutMenuItem }) => {
  const classes = useStyles();

  const renderDesktopCartBtn = (
    <IconButton component={Link} to="/cart" aria-label="show cart item" color="inherit">
      <Badge badgeContent={totalItems} color="secondary">
        <ShoppingCart/>
      </Badge>
    </IconButton>
  );

  const renderDesktopMenuItem = (content, to) => (
    <ListItem key={to} component={Link} to={to} className={classes.menuItemWrapper} >
      {content}
    </ListItem>
  );

  const renderDesktopMenu = (
      <List className={classes.menuWrapper} disablePadding component="ul" >
      {(totalItems > 0 && !isOnCart && !isOnRoute(checkoutMenuItem.to)) && renderDesktopMenuItem(checkoutMenuItem.content, checkoutMenuItem.to)}
      {menuItems.map(item => !isOnRoute(item.to) && (
        renderDesktopMenuItem(item.content, item.to)
        ))
      }
    </List>
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
