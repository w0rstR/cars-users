import axios from 'axios';

import baseURL from '../../config/users.urls';

const axiosService = axios.create({baseURL})


export default axiosService