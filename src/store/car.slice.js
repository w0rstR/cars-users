import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import carService from '../services/cars/car.service';

export const getAllCars = createAsyncThunk(
    'createSlice/getAllCars',
    async (_, {rejectedWithValue}) => {
        try {
            const cars = await carService.getAll()
            return cars
        } catch (e) {
            console.log(e)
        }
    }
)


export const carCreate = createAsyncThunk(
    'carSlice/carCreate',
    async ({data}, {dispatch}) => {
        try {
            const car = await carService.postCar(data)
            dispatch(addCar({car}))
        } catch (e) {
            console.log(e)
        }
    }
)

export const carDelete = createAsyncThunk(
    'carSlice/carDelete',
    async ({id}, {dispatch}) => {
        try {
            const car = await carService.deleteCar(id)
            dispatch(deleteCar({id}))
        } catch (e) {
            console.log(e)
        }
    }
)


export const carUpdate = createAsyncThunk(
    'carSlice/carUpdate',
    async ({data}, {dispatch}) => {
        try {
            const car = await carService.updateCar(data)
            dispatch(updateCar({data}))
        } catch (e) {
            console.log(e)
        }
    }
)


const carSlice = createSlice({
    name: 'carSlice',
    initialState: {
        cars: [],
        status: null,
        error: null,
        carForm: null
    },
    reducers: {
        addCar: (state, action) => {
            state.cars.push(action.payload.car)
        },
        deleteCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        },
        addToForm: (state, action) => {
            if (!action.payload) {
                state.carForm = null;
                return;
            }
            state.carForm = action.payload.item
        },
        updateCar: (state, action) => {
            state.cars.map(car => {
                if (+car.id === +action.payload.data.id) {
                    return {
                        id: car.id,
                        model: action.payload.data.model,
                        price: action.payload.data.price,
                        year: action.payload.data.year
                    }
                }
                return car
            })
        }
    },
    extraReducers: {
        [getAllCars.pending]: (state, action) => {
            state.status = 'pending'
            state.error = null
        },
        [getAllCars.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.cars = action.payload
        },
        [getAllCars.rejected]: (state, action) => {
            console.log()
        }
    }

})
const carReducer = carSlice.reducer
export default carReducer
export const {addCar, deleteCar, addToForm, updateCar} = carSlice.actions