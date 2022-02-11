import axios from 'axios';
import baseURL from '../../config/cars.urls';


const axiosService = axios.create({baseURL})


export default axiosService