import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {usersService} from '../services/users/users.service';


export const getAllUsers = createAsyncThunk(
    'userSlice/getAllUsers',
    async (_, {rejectedWithValue}) => {
        try {
            const users = await usersService.getAll()
            return users
        } catch (e) {
            console.log(e)
        }
    }
)


const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        users: [],
        status: null,
        error: null
    },
    reducers: {},
    extraReducers: {
        [getAllUsers.pending]: (state, action) => {
            state.status = 'pending'
            state.error = null
        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.users = action.payload
        },
        [getAllUsers.rejected]: (state, action) => {
            console.log()
        }
    }
})

const userReducer = userSlice.reducer
export default userReducer
