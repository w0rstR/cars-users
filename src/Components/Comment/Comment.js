import s from './Comment.module.css'

export default function Comment({item}) {
    const {id, name, email} = item
    return (
        <div className={s.container}>
            <div className={s.item}>Id: {id}</div>
            <div className={s.item}>Name: {name}</div>
            <div className={s.item}>Email: {email}</div>
        </div>
    )
}