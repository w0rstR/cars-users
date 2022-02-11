import {useParams} from 'react-router-dom';

import PostList from '../../Components/PostList/PostList';
import s from './UserDetailsPage.module.css'

export default function UserDetailsPage() {
    const {id} = useParams();
    return (
        <div className={s.container}>
            <PostList id={id}/>
        </div>
    )
}