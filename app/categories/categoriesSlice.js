import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie } from "cookies-next";

const URL = 'http://127.0.0.1:5000/categories';

const initialState = []

export const fetchCategories= createAsyncThunk('categories/fetchCategories', async () => {
    const response = await axios.get(URL);
    return response.data
})

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

export const selectAllCategories = (state) => state.categories;

//export const selectUserById = (state, userId) =>state.users.find(user => user.id === userId)

export default categoriesSlice.reducer