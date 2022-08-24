import { configureStore } from "@reduxjs/toolkit";
import products from "./productSlice"
import isLogin from "./modalSlice"
import user from "./auth"
import admin from "./adminActions"
import cart from "./cartActions"


  
export default configureStore({
    reducer:{
        products,
        isLogin,
        user,
        admin,
        cart
    }
})