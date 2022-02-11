import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

import s from './Cars.module.css'
import {getAllCars} from '../../store/car.slice';
import Car from '../Car/Car';

export default function Cars() {
    const {cars} = useSelector(state => state['carReducer'])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllCars())
    }, [cars])
    return (
        <div className={s.container}>
            {cars ? cars.map(car => <Car key={car.id} item={car}/>) : null}
        </div>
    )
}