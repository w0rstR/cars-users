import s from './CarPage.module.css'
import Form from '../../Components/Form/Form';
import Cars from '../../Components/Cars/Cars';

export default function CarsPage() {
    return (
        <div className={s.container}>
            <div className={s.form}>
                <Form/>
            </div>
            <div className={s.cars}>
                <Cars/>
            </div>
        </div>
    )
}