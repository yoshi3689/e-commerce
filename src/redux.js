import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { commerce } from "./lib/commerce";

// products slice
export const fetchProducts = createAsyncThunk('products/fetch', async() => {
  const { data } = await commerce.products.list();
  return data;
});
export const fetchCategories = createAsyncThunk('products/fetchCategories', async() => {
  const { data } = await commerce.categories.list();
  return data;
});
const productsSlice = createSlice({
  name: 'products',
  initialState: {products: null, categories: null},
  extraReducers: {
    [fetchProducts.fulfilled]: (state, { payload }) => {state.products = payload },
    [fetchCategories.fulfilled]: (state, { payload }) => {state.categories = payload},
  }
});

// product slice
export const fetchProduct = createAsyncThunk('products/fetch', async(productId) => {
  const product = await commerce.products.retrieve(productId);
  return product;
});
const productSlice = createSlice({
  name: 'product',
  initialState: {product: null, productId: null, fetchError: null},
  extraReducers: {
    [fetchProduct.fulfilled]: (state, { payload }) => {state.product = payload },
  }
});

//cart slice and async functions in it
export const fetchCart = createAsyncThunk('cart/fetch', async() => {
  const cart = await commerce.cart.retrieve()
  return cart;
});
export const addToCart = createAsyncThunk('cart/add', async({ id, quantity }) => {
  const { cart } = await commerce.cart.add(id, quantity);
  return cart;
});
export const removeFromCart = createAsyncThunk('cart/remove', async(id) => {
  const { cart } = await commerce.cart.remove(id);
  return cart;
});
export const updateCart = createAsyncThunk('cart/update', async({ id, quantity }) => {
  const { cart } = await commerce.cart.update(id, { quantity });
  return cart;
});
export const emptyCart = createAsyncThunk('cart/empty', async() => {
  const { cart } = await commerce.cart.empty();
  return cart;
});
export const refreshCart = createAsyncThunk('cart/refresh', async () => {
  const newCart = await commerce.cart.refresh();
  return newCart;
})

const cartSlice = createSlice({
  name: 'cart',
  initialState: {cart: {}, isUpdated: false},
  extraReducers: {
    [fetchCart.fulfilled]: ( state, { payload }) => {state.cart = payload},
    [addToCart.fulfilled]: ( state, { payload }) => {state.cart = payload; state.isUpdated = true; },
    [removeFromCart.fulfilled]: ( state, { payload }) => {state.cart = payload; state.isUpdated = true;},
    [updateCart.fulfilled]: ( state, { payload }) => {state.cart = payload; state.isUpdated = true;},
    [emptyCart.fulfilled]: ( state, { payload }) => {state.cart = payload; state.isUpdated = true;},
    [refreshCart.fulfilled]: ( state, { payload }) => {state.cart = payload; state.isUpdated = true;},
  }
})

//token slice
export const createToken = createAsyncThunk('token/create', async id => {
    const token = await commerce.checkout.generateToken(id, { type: 'cart' });
    return token;
  });
const tokenSlice = createSlice({
    name: 'token',
    initialState: {token: null, tokenError: null, },
    extraReducers: {
      [createToken.fulfilled]: (state, { payload }) => {state.token = payload},
      [createToken.rejected]: (state, error) => {
        state.tokenError = error;
      },

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

export const fetchOptions = createAsyncThunk('shipping/fetchOptions', async( { tokenId, country, region} ) => {
  const options = await commerce.checkout.getShippingOptions(tokenId, {country, region});
  return options;
})

const shippingSlice = createSlice({
  name: 'shipping',
  initialState: {countries: null, subdivisions: null, options: null, shippingInfo: null},
  reducers: { setShippingInfo: (state, { payload }) => { console.log(payload); state.shippingInfo = payload }},
  extraReducers: {
    [fetchCountries.fulfilled]: (state, { payload }) => {state.countries = payload},
    [fetchSubDivisions.fulfilled]: (state, { payload }) => {state.subdivisions = payload},
    [fetchOptions.fulfilled]: (state, { payload }) => {state.options = payload},
  }
})

export const { setShippingInfo } = shippingSlice.actions;

//order slice
// TODO: add ways to cope with invalid fields(e.g zip code, county/state and etc)
export const createOrder = createAsyncThunk('order/create', async ({ id, orderInfo }) => {
  const incomingOrder = await commerce.checkout.capture(id, orderInfo);
  return incomingOrder;
});

export const createPayment = createAsyncThunk('order/createPayment', async({ stripe, cardElement }) => {
  const { paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement });
  return paymentMethod;
})

const orderSlice = createSlice({
  name: 'order',
  initialState: {order: null, payment: null, orderError: null, },
  extraReducers: {
    [createOrder.fulfilled]: (state, { payload }) => {state.order = payload},
    [createOrder.rejected]: (state, error) => {
      console.log(state.order, error); 
      state.orderError = error;
    },
    [createPayment.fulfilled]: (state, { payload }) => {state.payment = payload},
    [createPayment.rejected]: (state, error) => {
      console.log(state.order, error); 
      state.orderError = error
    },
    
  }
});

const reducer = {
  products: productsSlice.reducer,
  product: productSlice.reducer,
  cart: cartSlice.reducer,
  token: tokenSlice.reducer,
  shipping: shippingSlice.reducer,
  order: orderSlice.reducer,
};

export const store = configureStore({ reducer: reducer });