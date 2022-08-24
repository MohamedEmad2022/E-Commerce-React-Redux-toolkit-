import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {cart: [], success: false},
    reducers:{
        
        addItem: (state, action)=>{
            if(typeof window !== "undefined"){
                if(localStorage.getItem("cart")){
                    state.cart =  JSON.parse(localStorage.getItem("cart"))
                }
                const item = state.cart.find((el)=> el._id === action.payload._id)
                if(item){
                    item.count++
                }else{
                    state.cart.push({...action.payload, count: 1})
                }
                localStorage.setItem("cart", JSON.stringify(state.cart))
            }
        },

        getCart: (state)=>{
            if(localStorage.getItem("cart")){
                 state.cart =  JSON.parse(localStorage.getItem("cart"))
            }else{
                state.cart = []
            }
            state.success = true
        },
        removeItem: (state, action)=>{
            state.cart = state.cart.filter((el)=>{
                return el._id !== action.payload
            })
            localStorage.setItem("cart", JSON.stringify(state.cart))
        }
    }
})


export default cartSlice.reducer;
export const {addItem, getCart, removeItem } = cartSlice.actions