import s from './Post.module.css'

import {Link} from 'react-router-dom';

export default function Post({item}) {
    const {id, title} = item;
    return (
        <div className={s.container}>
            <div>
                <div className={s.details}>Id: {id}</div>
                <div className={s.details}>Title: {title}</div>
            </div>
            <div>
                <button className={s.btn}><Link to={`/post/${id.toString()}/comments`}><p className={s.item}>Show
                    details</p></Link></button>
            </div>
        </div>
    )
}