import axiosService from './axios.service';
import {urls} from '../../config/users.urls';


export const usersService = {
    getAll: () => axiosService.get(urls.users).then(value => value.data),
    getPostById: (id) => axiosService.get(`${urls.users}/${id}${urls.posts}`).then(value => value.data),
    getCommentsById: (id) => axiosService.get(`${urls.posts}/${id}${urls.commnets}`).then(value => value.data)
}