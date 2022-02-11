import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

import User from '../User/User';
import {getAllUsers} from '../../store/user.slice';
import s from './UserList.module.css'

export default function UserList() {
    const {users} = useSelector(state => state['userReducer'])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllUsers())
    }, [])

    return (
        <div className={s.container}>
            <div className={s.wrap}>
                {users.map(user => <User key={user.id} item={user}/>)}
            </div>
        </div>
    )
}