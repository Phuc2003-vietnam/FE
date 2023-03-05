import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        /**@type {string | undefined} */
        token: undefined,

        /**@type {boolean} */
        role: false,
        fullname: '',
        phone: '',
        address: '',
    },
    reducers: {
        changeUserData: (state, action) => {
            state.token = action.payload.token;
            state.fullname = action.payload.fullname;
            state.phone = action.payload.phone;
            state.address = action.payload.address;
            state.role = action.payload.role;
        }
    },
    extraReducers: (builder) => {},
});

export default userSlice;

// export const login = createAsyncThunk('user/login', async (data) => {});
