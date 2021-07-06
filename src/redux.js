import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import _ from 'lodash';
import { commerce } from "./lib/commerce";

// products slice
export const fetchProducts = createAsyncThunk('products/fetch', async() => {
  const { data } = await commerce.products.list();
  return data;
});
const productsSlice = createSlice({
  name: 'products',
  initialState: {products: {}},
  extraReducers: {
    [fetchProducts.fulfilled]: (state, { payload }) => {state.products = _.mapKeys(payload, 'id'); },
  }
})

//cart slice
export const fetchCart = createAsyncThunk('slice/', async() => {
})
export const addToCart = createAsyncThunk('slice/', async(id, quantity) => {
  const { cart } = await commerce.cart.add(id, quantity);
  return 'a';
})
export const removeFromCart = createAsyncThunk('slice/', async(id) => {
  const { cart } = await commerce.cart.remove(id);
  return 'a';

})
export const updateCart = createAsyncThunk('slice/', async(id, quantity) => {
  const { cart } = await commerce.cart.update(id, {quantity});
  return 'a';
})
export const emptyCart = createAsyncThunk('slice/', async() => {
  const { cart } = await commerce.cart.empty();
  return 'a';

})
export const refreshCart = createAsyncThunk('slice/', async () => {
  const newCart = await commerce.cart.refresh();
  return 'a';
})

const cartSlice = createSlice({
  name: 'cart',
  initialState: {cart: {}},
  extraReducers: {
    [fetchCart.fulfilled]: (state, { payload }) => {state.products = payload},
    [addToCart.fulfilled]: (state, { payload }) => {state.products = payload},
    [removeFromCart.fulfilled]: (state, { payload }) => {state.products = payload},
    [updateCart.fulfilled]: (state, { payload }) => {state.products = payload},
    [emptyCart.fulfilled]: (state, { payload }) => {state.products = payload},
    [refreshCart.fulfilled]: (state, { payload }) => {state.products = payload},
  }
  
})

//token slice
export const generateToken = createAsyncThunk('slice/', async cartId => {
    const token = await commerce.checkout.generateToken(cartId, { type: 'cart' });
    return 'a';
  });
const tokenSlice = createSlice({
    name: 'token',
    initialState: {token: {}},
    extraReducers: {
      [generateToken.fulfilled]: (state, { payload }) => {state.products = payload},
    }
    
  })


//shipping slice
export const fetchCountries = createAsyncThunk('shipping/fetchCountries', async(tokenId) => {
  const { countries } = await commerce.services.localeListShippingCountries(tokenId);
  return countries;
})

export const fetchSubDivisions = createAsyncThunk('shipping/fetchSubdivs', async(countryCode) => {
  const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);
  return subdivisions;
})

export const fetchOptions = createAsyncThunk('shipping/fetchOptions', async(tokenId, country, subDivision) => {
  const options = await commerce.checkout.getShippingOptions(tokenId, {country, region: subDivision});
  return options;
})

const shippingSlice = createSlice({
  name: 'shipping',
  initialState: {countries: {}, subdivisions: {}, options: {}, shippingInfo: {}},
  reducers: { setShippingInfo: (state, { payload }) => { state.shippingInfo = payload }},
  extraReducers: {
    [fetchCountries.fulfilled]: (state, { payload }) => {state.countries = payload},
    [fetchSubDivisions.fulfilled]: (state, { payload }) => {state.subdivisions = payload},
    [fetchOptions.fulfilled]: (state, { payload }) => {state.options = payload},
  }
})

export const { setShippingInfo } = shippingSlice.actions;


//order slice
export const createOrder = createAsyncThunk('slice/', async(tokenId, newOrder) => {
    const incomingOrder = await commerce.checkout.capture(tokenId, newOrder);
    return 'a';
});
const orderSlice = createSlice({
  name: 'order',
  initialState: {order: {}},
  extraReducers: {
    [createOrder.fulfilled]: (state, { payload }) => {state.order = payload},
  }
})



const justTest = {test: 'a'};
const reducer = {
  products: productsSlice.reducer,
  cart: cartSlice.reducer,
  token: tokenSlice.reducer,
  shipping: shippingSlice.reducer,
  order: orderSlice.reducer,
};
export const store = configureStore({ reducer: reducer });