import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"


export const SignupAction = createAsyncThunk("auth/Signuphand", async (userData, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue } = thunkAPI
    try {
        const response = await fetch(`http://localhost:8000/api/signup`,{
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
            
        })
        
        const data = await response.json();
            if (!response.ok) {
                return rejectWithValue(data.error)
            }else{
                return fulfillWithValue(data)
            }
    }

    catch (error) {
            return rejectWithValue(error.message)
        }
    })

    export const SigninAction = createAsyncThunk("auth/Signinhand", async (userData, thunkAPI) => {
        const { rejectWithValue, fulfillWithValue, dispatch } = thunkAPI
        try {
            const response = await fetch(`http://localhost:8000/api/signin`,{
                method: "POST",
                body: JSON.stringify(userData),
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
                
            })
            
            const data = await response.json();
            if (!response.ok) {
                return rejectWithValue(data.error)
            }else{
                dispatch(authentication(data))
                return fulfillWithValue(data)
            }
            
                

        }catch(error){
            throw rejectWithValue(error.message)
        }
        })

        export const getUserProfile = createAsyncThunk("auth/getUserProfile", async ({user, token}, thunkAPI) => {
            const { rejectWithValue, fulfillWithValue } = thunkAPI
            try {
                const response = await fetch(`http://localhost:8000/api/user/${user._id}`,{
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                    
                })
                
                const data = await response.json();
                if (!response.ok) {
                    return rejectWithValue(data.error)
                }else{
                
                    return fulfillWithValue(data)
                }
                
                    
    
            }catch(error){
                throw rejectWithValue(error.message)
            }
            })


        export const SignOutAcion = createAsyncThunk("auth/SignOuthand", async (_, thunkAPI) => {
            const {rejectWithValue} = thunkAPI;
            try {
                 await fetch(`http://localhost:8000/api/signout`,{
                    method: "GET",
                    
                })
                
                
                return localStorage.removeItem("jwt");
            }
        
            catch (error) {
                return rejectWithValue(error.message)
                }
            })

    export const AuthSlice = createSlice({
        name: "auth",
        initialState: { user: null, error: null, isLodding: false, success: null},
        reducers: {
            authentication: (state, action)=>{
                if(typeof window !== "undefined"){
                    localStorage.setItem("jwt", JSON.stringify(action.payload))
                }
            },
            
    },
        extraReducers:{
            [SignupAction.pending]: (state, action) => {
                state.isLodding = true
                
            },
            [SignupAction.fulfilled]: (state, action) => {
                state.isLodding = false
                state.success = true
                console.log(action)
                
            },
            [SignupAction.rejected]: (state, action) => {

                state.isLodding = false
                state.success = false
                state.error = action.payload
            },

            //signin actions
            [SigninAction.pending]: (state, action) => {
                state.isLodding = true
                state.success = false
            },
            [SigninAction.fulfilled]: (state, action) => {

                state.isLodding = false
                state.success = true
                
                
                
            },
            [SigninAction.rejected]: (state, action) => {
                
                state.isLodding = false
                state.success = false
                state.error = action.payload
                
            },

            //get profile Actions
            [getUserProfile.pending]: (state, action) => {
                state.isLodding = true
                state.success = false
            },
            [getUserProfile.fulfilled]: (state, action) => {

                state.isLodding = false
                state.success = true
                state.user = action.payload
                console.log(action)
                
            },
            [getUserProfile.rejected]: (state, action) => {
                
                state.isLodding = false
                state.success = false
                state.error = action.payload
                console.log(action)
            },

            //signoUT actions
            [SignOutAcion.pending]: (state, action) => {
                state.isLodding = true
                
            },
            [SignOutAcion.fulfilled]: (state, action) => {

                
                state.user = null
                state.success = true
                state.isLodding = false
            },
            [SignOutAcion.rejected]: (state, action) => {
                
                state.isLodding = false
                state.success = false
                state.error = action.payload
                
            },
        },


        })
    export default AuthSlice.reducer;
    export const {authentication} = AuthSlice.actions