import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {usersService} from '../services/users/users.service';


export const getComments = createAsyncThunk(
    'commentSlice/getComments',
    async ({id}) => {
        try {
            const comments = await usersService.getCommentsById(id)
            return comments
        } catch (e) {
            console.log(e)
        }
    }
)


const commentSlice = createSlice({
    name: 'commentSlice',
    initialState: {
        comments: [],
        status: null,
        error: null
    },
    reducers: {},
    extraReducers: {
        [getComments.pending]: (state, action) => {
            state.status = 'pending'
            state.error = null
        },
        [getComments.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.comments = action.payload
        },
        [getComments.rejected]: (state, action) => {
            console.log('errorrrrr')
        }
    }
})

const commentReducer = commentSlice.reducer
export default commentReducer