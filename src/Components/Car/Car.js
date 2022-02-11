import {useDispatch} from 'react-redux';

import {addToForm, carDelete} from '../../store/car.slice';
import s from './Car.module.css'

export default function Car({item}) {
    const dispatch = useDispatch()
    const {id, model, price, year} = item
    return (
        <div className={s.container}>
            <div>
                <div>Model: {model}</div>
                <div>Price: {price}</div>
                <div>Year: {year}</div>
            </div>
            <button onClick={() => dispatch(carDelete({id}))} className={s.btn}>Delete</button>
            <button onClick={() => dispatch(addToForm({item}))} className={s.btn}>Update</button>
        </div>
    )
}