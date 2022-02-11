import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

import s from './Form.module.css'
import {addToForm, carCreate, carUpdate} from '../../store/car.slice';
import {useForm} from 'react-hook-form';

export default function Form() {
    const {handleSubmit, register, reset, setValue} = useForm()
    const dispatch = useDispatch()
    const {carForm} = useSelector(state => state['carReducer'])

    const submit = (data) => {
        dispatch(carCreate({data}))
        reset()
    }

    const update = (data) => {
        dispatch(carUpdate({data}))
        reset()
        dispatch(addToForm(null))
    }

    useEffect(() => {
        if (carForm) {
            setValue('id', `${carForm.id}`)
            setValue('model', `${carForm.model}`)
            setValue('price', `${carForm.price}`)
            setValue('year', `${carForm.year}`)
        }
    }, [carForm])


    return (
        <div>
            {carForm ?
                <div>
                    <form onSubmit={handleSubmit(update)} className={s.container}>
                        <div className={s.item}><label>Id:<input type="text" {...register('id')}/></label></div>
                        <div className={s.item}><label>Model:<input type="text" {...register('model')}/></label></div>
                        <div className={s.item}><label>Price:<input type="text" {...register('price')}/></label></div>
                        <div className={s.item}><label>Year:<input type="text" {...register('year')}/></label></div>
                        <div className={s.item}>
                            <button className={s.btn}>
                                Update
                            </button>
                        </div>
                    </form>
                </div> :
                <form onSubmit={handleSubmit(submit)} className={s.container}>
                    <div className={s.item}><label>Model:<input type="text" {...register('model')}/></label></div>
                    <div className={s.item}><label>Price:<input type="text" {...register('price')}/></label></div>
                    <div className={s.item}><label>Year:<input type="text" {...register('year')}/></label></div>
                    <div className={s.item}>
                        <button className={s.btn}>
                            Add
                        </button>
                    </div>
                </form>}
        </div>
    )
}