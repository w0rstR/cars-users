import {useParams} from 'react-router-dom';

import CommentList from '../../Components/CommentList/CommentList';
import s from './CommentDetailsPage.module.css'

export default function CommentDetailsPage() {
    const {id} = useParams();

    return (
        <div className={s.container}>
            <CommentList id={id}/>
        </div>
    )
}