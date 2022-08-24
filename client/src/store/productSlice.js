import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"



export const getProductBySyle = createAsyncThunk("product/getProductBySyle", async (_, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue } = thunkAPI
    try {
        const res = await fetch(`http://localhost:8000/api/products?sortBy=sold&order=desc&limit=6`);
        const data = await res.json();
        if (!res.ok) {
            return rejectWithValue(data.error)
        } else {
            return fulfillWithValue(data)
        }
    }
    catch (error) {
        throw rejectWithValue(error.message)
    }


})
export const getProductByArrival = createAsyncThunk("product/getProductByArrival", async (_, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue } = thunkAPI
    try {
        const res = await fetch(`http://localhost:8000/api/products?sortBy=createdAt&order=desc&limit=6`);
        const data = await res.json();
        if (!res.ok) {
            return rejectWithValue(data.error)
        } else {
            return fulfillWithValue(data)
        }
    }
    catch (error) {
        throw rejectWithValue(error.message)
    }


})

export const getSinglProduct = createAsyncThunk("product/getSinglProduct", async (productId, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue } = thunkAPI
    try {
        const res = await fetch(` http://localhost:8000/api/product/${productId}`);
        const data = await res.json();
        if (!res.ok) {
            return rejectWithValue(data.error)
        } else {
            return fulfillWithValue(data)
        }
    }
    catch (error) {
        throw rejectWithValue(error.message)
    }


})
export const getRelatedProducts = createAsyncThunk("product/getRelatedProducts", async (productId, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue } = thunkAPI
    try {
        const res = await fetch(` http://localhost:8000/api/products/related/${productId}`);
        const data = await res.json();
        if (!res.ok) {
            return rejectWithValue(data.error)
        } else {
            return fulfillWithValue(data)
        }
    }
    catch (error) {
        throw rejectWithValue(error.message)
    }



})


const initialState = {
    productsBySyle: [],
    productsByArrival: [],
    isLodding: false,
    singl: null,
    relatedProducts: [],
    error: null,
    success: false
}

export const productSlice = createSlice({
    name: "product",
    initialState,
    extraReducers: {
        [getProductBySyle.pending]: (state, action) => {
            state.isLodding = true;

        },
        [getProductBySyle.fulfilled]: (state, action) => {
            state.isLodding = false;
            state.productsBySyle = action.payload
            
        },
        [getProductBySyle.rejected]: (state, action) => {
            state.isLodding = false;
            state.error = action.payload
        },
        //get productsByArrival actions
        [getProductByArrival.pending]: (state, action) => {
            state.isLodding = true;

        },
        [getProductByArrival.fulfilled]: (state, action) => {
            state.isLodding = false;
            state.productsByArrival = action.payload
            
        },
        [getProductByArrival.rejected]: (state, action) => {
            state.isLodding = false;
            state.error = action.payload
        },
        //get single product actions
        [getSinglProduct.pending]: (state, action) => {
            state.isLodding = true;

        },
        [getSinglProduct.fulfilled]: (state, action) => {
            state.isLodding = false;
            state.singl = action.payload
            console.log(action)
        },
        [getSinglProduct.rejected]: (state, action) => {
            state.isLodding = false;
            console.log(action)
        },

        // getRelatedProducts Actions
        [getRelatedProducts.pending]: (state, action) => {
            state.success = false;

        },
        [getRelatedProducts.fulfilled]: (state, action) => {
            state.success = true;
            state.relatedProducts = action.payload
            console.log(action)
        },
        [getRelatedProducts.rejected]: (state, action) => {
            state.isLodding = false;
            console.log(action)
        },

    }
})
export default productSlice.reducer;