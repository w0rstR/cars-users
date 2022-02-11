import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

import {getPost} from '../../store/post.slice';
import Post from '../Post/Post';
import s from './PostList.module.css'

export default function PostList({id}) {
    const {posts} = useSelector(state => state['postReducer'])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPost({id}))
    }, [id])
    return (
        <div className={s.container}>
            <div className={s.wrap}>
                {posts ? posts.map(post => <Post key={post.key} item={post}/>) : null}
            </div>
        </div>
    )
}