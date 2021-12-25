import React from 'react'
import {  Select, MenuItem } from '@material-ui/core';

const ShippingDropdown = ({ shippingDetailItems }) => {
  return (
      <Select 
        fullWidth
        defaultValue={shippingDetailItems.list[0].id}
        value={shippingDetailItems.value} 
        onChange={(e) => shippingDetailItems.onClick(e.target.value)}>
          {shippingDetailItems.list.map(item => (
            <MenuItem key={item.id} value={item.id}>
              {item.label}
            </MenuItem>
          ))}
      </Select>

    
  )
}

export default ShippingDropdown
