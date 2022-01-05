import { Typography} from '@material-ui/core'
// import { ShoppingBasket, Home, Category, Description } from '@material-ui/icons'

export const MENU_ITEMS = [
  {
    content : (<>
      <Typography>Home</Typography>
    </>),
    to: "/"

  },
  {
    content : (<>
      <Typography>Categories</Typography>
    </>),
    to: "/categories"

  },
  {
    content : (<>
      <Typography>Products</Typography>
    </>),
    to: "/products"
  },
  ];

export const CHECKOUT_ITEM = {
  content : (
  <>
      <Typography>Checkout</Typography>
  </>),
  to: "/checkout"
};