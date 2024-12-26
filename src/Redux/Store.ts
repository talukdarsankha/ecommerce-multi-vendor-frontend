// import { combineReducers, legacy_createStore, applyMiddleware } from 'redux';
// import {thunk} from 'redux-thunk';
// import { authReducer } from './Auth/Reducer';
// import { tweetReducer } from './Tweet/Reducer';

// import { combineReducers } from "redux"

// const rootReducers = combineReducers({
//     auth: authReducer,
//     tweet:tweetReducer

// });

// export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));






import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { thunk } from 'redux-thunk'
import sellerSlice from './Seller/SellerSlice'
import sellerProductSlice from './Seller/SellerProductSlice'
import customerProductSlice from './Customer/ProductSlice'
import authSlice from './Auth/AuthSlice'
import customerSlice from './Customer/CustomerSlice'
import cartSlice from './Customer/CartSlice'
import CouponSlice from './Customer/CouponSlice'
import userOrderSlice from './Customer/OrderSlice'
import customerWishListSlice from './Customer/WishList'
import wishListSlice from './Customer/WishList'




const rootReducer = combineReducers({
    seller:sellerSlice,
    sellerProduct:sellerProductSlice,
    customerProduct:customerProductSlice,
    auth:authSlice,
    customer:customerSlice,
    cart:cartSlice,
    wishList:wishListSlice,
    coupon:CouponSlice,
    userOrder: userOrderSlice
})


const store = configureStore({
    reducer:rootReducer,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(thunk)
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

export const useAppDispatch=()=>useDispatch<AppDispatch>();
export const useAppSelector:TypedUseSelectorHook<RootState>=useSelector;

export default store;
