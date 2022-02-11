import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

import {getComments} from '../../store/comment.slice';
import Comment from '../Comment/Comment';
import s from './CommentList.module.css'

export default function CommentList({id}) {
    const dispatch = useDispatch();
    const {comments} = useSelector(state => state['commentReducer'])

    useEffect(() => {
        dispatch(getComments({id}))
    }, [id])

    return (
        <div className={s.container}>
            <div className={s.wrap}>
                <h2 className={s.item}>Comments list by id: {id}</h2>
                {comments ? comments.map(comment => <Comment key={comment.id} item={comment}/>) : null}
            </div>
        </div>
    )
}