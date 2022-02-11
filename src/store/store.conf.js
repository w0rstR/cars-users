import {configureStore} from '@reduxjs/toolkit'

import carReducer from './car.slice';
import userReducer from './user.slice';
import postReducer from './post.slice';
import commentReducer from './comment.slice';

const store = configureStore({
    reducer: {
        carReducer: carReducer,
        userReducer: userReducer,
        postReducer: postReducer,
        commentReducer: commentReducer
    }
})

export default store