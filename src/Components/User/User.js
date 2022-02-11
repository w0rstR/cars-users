import s from './User.module.css'

import {Link} from 'react-router-dom';

export default function User({item}) {
    const {id, name} = item
    return (
        <div className={s.container}>
            <div className={s.info}>
                <div className={s.item}>Id: {id}</div>
                <div className={s.item}>Name: {name}</div>
            </div>
            <div>
                <button className={s.btn}><Link to={`details/${id}`}><p className={s.item}>Show details</p></Link>
                </button>
            </div>
        </div>
    )
}