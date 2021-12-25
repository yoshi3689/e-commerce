import React from 'react'
import { Typography, List, ListItem, ListItemText } from '@material-ui/core'

const styles = {
  li: {padding: '10px 0'},
  text: {fontWeight: '700'}
};
const Review = ({ checkoutToken }) => {
  return (
    <>
     <Typography variant="h6">Order Summary</Typography>
     <List disablePadding>
       {checkoutToken.live.line_items.map(item => (
         <ListItem key={item.name} style={styles.li}>
           <ListItemText primary={item.name} secondary={`Quantity ${item.quantity}`} />
           <Typography variant="body2"> {item.line_total.formatted_with_symbol} </Typography>
         </ListItem>
       ))}
       <ListItem style={styles.li}>
         <ListItemText>Total: </ListItemText>
         <Typography variant="subtitle1" style={styles.text}>
           {checkoutToken.live.subtotal.formatted_with_symbol}
         </Typography>
       </ListItem>
     </List>
    </>
  )
}

export default Review
