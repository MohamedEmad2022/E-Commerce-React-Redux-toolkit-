import { createSlice } from "@reduxjs/toolkit";




const modalSlice = createSlice({
    name: "modal",
    initialState: {isLogin: false, componentName: null},
    reducers: {
        showModal:(state, action)=>{
            state.isLogin = true;
            state.componentName = action.payload
        },
        hideModal:(state, action)=>{
            state.isLogin = false;
            state.componentName = null
        },
        login: (state, action)=>{
            state.componentName = action.payload
        },
        
       
    }

})


export const {showModal, hideModal, login} = modalSlice.actions;
export default modalSlice.reducer 