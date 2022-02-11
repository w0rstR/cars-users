import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {usersService} from '../services/users/users.service';

export const getPost = createAsyncThunk(
    'postSlice/getPost',
    async ({id}) => {
        const posts = await usersService.getPostById(id)
        return posts
    }
)


const postSlice = createSlice({
    name: 'postSlice',
    initialState: {
        posts: [],
        status: null,
        error: null
    },
    reducers: {},
    extraReducers: {
        [getPost.pending]: (state, action) => {
            state.status = 'pending'
            state.error = null
        },
        [getPost.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.posts = action.payload
            console.log()
        },
        [getPost.rejected]: (state, action) => {
            console.log('errorrrrr')
        }
    }

})

const postReducer = postSlice.reducer
export default postReducer