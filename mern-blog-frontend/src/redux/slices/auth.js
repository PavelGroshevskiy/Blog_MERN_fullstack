import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../axios";

const initialState = {
    data:  null,
    status: 'loading'
}

const fetchUserData = createAsyncThunk('auth/fetchUserData ',async (params) => {
    const data = axios.post('/auth/login', params) // params (store for email & password)
})

 const authSlice = createSlice({
     name: 'auth',
     initialState,
     reducers: {},
     extraReducers: {
         [fetchUserData.pending]: (state) => {
             state.status = 'loading';
             state.data = null;
         },
         [fetchUserData.fulfilled]: (state, action) => {
             state.status = 'loaded';
             state.data = action.payload;
         },
         [fetchUserData.rejected]: (state) => {
             state.status = 'error';
             state.data = null;
         },
     }
 })

export const authReducer = authSlice.reducer