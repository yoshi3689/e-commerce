import { Typography} from '@material-ui/core'
import { ShoppingBasket, Home, Category, Description } from '@material-ui/icons'

export const MENU_ITEMS = [
  {
    content : (<>
      <Home />
      <Typography>Home</Typography>
    </>),
    to: "/"

  },
  {
    content : (<>
      <Category />
      <Typography>Categories</Typography>
    </>),
    to: "/categories"

  },
  {
    content : (<>
      <Description />
      <Typography>Products</Typography>
    </>),
    to: "/products"
  },
  ];

export const CHECKOUT_ITEM = {
  content : (
  <>
    <ShoppingBasket />
      <Typography>Checkout</Typography>
  </>),
  to: "/checkout"
};