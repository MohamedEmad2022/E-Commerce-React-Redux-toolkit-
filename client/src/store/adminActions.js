import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const creatCategoryAction = createAsyncThunk("admin/creatCategoryAction", async ({userId, category, token},thunkAPI)=>{
    const { rejectWithValue, fulfillWithValue } = thunkAPI
    try{
        const res = await fetch(`http://localhost:8000/api/category/create/${userId}`,{
            method:"POST",
            body: JSON.stringify(category),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
            
        })
        const data = await res.json();
            if (!res.ok) {
                return rejectWithValue(data.error)
            }else{
                return fulfillWithValue(data)
            }
    }
    catch(error){
        throw rejectWithValue(error.message)
    }
})

export const creatProductAction = createAsyncThunk("admin/creatProductAction", async ({userId, product, token},thunkAPI)=>{
    const { rejectWithValue, fulfillWithValue } = thunkAPI
    try{
        const res = await fetch(`http://localhost:8000/api/product/create/${userId}`,{
            method:"POST",
            body: JSON.stringify(product),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
            
        })
        const data = await res.json();
            if (!res.ok) {
                return rejectWithValue(data.error)
            }else{
                return fulfillWithValue(data)
            }
    }
    catch(error){
        throw rejectWithValue(error.message)
    }
})


const adminSlice = createSlice({
    name: "admin",
    initialState: {isLodding: false, error: null},
    reducers:{},
    extraReducers: {
        [creatCategoryAction.pending]: (state, action) => {
            state.isLodding = true
            
        },
        [creatCategoryAction.fulfilled]: (state, action) => {
            state.isLodding = false
            console.log(action)
            
        },
        [creatCategoryAction.rejected]: (state, action) => {

            state.isLodding = false
            state.error = action.error.message
            console.log(action)
        },

        // creat product actions
        [creatProductAction.pending]: (state, action) => {
            state.isLodding = true
            
        },
        [creatProductAction.fulfilled]: (state, action) => {
            state.isLodding = false
            console.log(action)
            
        },
        [creatProductAction.rejected]: (state, action) => {

            state.isLodding = false
            state.error = action.error.message
            console.log(action)
        },
    }
    
})


export default adminSlice.reducer;