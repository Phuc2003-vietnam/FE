import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        /**@type {string | undefined} */
        token: undefined,

        /**@type {"none", "user", "admin"} */
        role: 'none',
        username: '',
        avatar: '',
    },
    reducers: {},
    extraReducers: (builder) => {},
});

export default userSlice;

export const login = createAsyncThunk('user/login', async (data) => {});
