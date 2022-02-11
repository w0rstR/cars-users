import {carsUrls} from '../../config/cars.urls';
import axiosService from './axios.service' ;

const carService = {
    getAll: () => axiosService.get(carsUrls.cars).then(value => value.data),
    postCar: (car) => axiosService.post(carsUrls.cars, car).then(value => value.data),
    deleteCar: (id) => axiosService.delete(`${carsUrls.cars}/${id}`).then(value => value.data),
    updateCar: ({id, year, model, price}) => axiosService.patch(`${carsUrls.cars}/${id}`, {
        model,
        price,
        year
    }).then(value => value.data)
}

export default carService