import { createSlice, nanoid } from "@reduxjs/toolkit";
import { addCar } from "../actions";

export interface Car {
  id?: string;
  name: string;
  cost: number;
}

interface CarsState {
  searchTerm: string;
  cars: Car[];
}

const initialState: CarsState = {
  searchTerm: "",
  cars: [],
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    changeSearchTerm(state, action: { type: string; payload: string }) {
      state.searchTerm = action.payload;
    },
    // addCar(
    //   state,
    //   action: {
    //     type: string;
    //     payload: Car;
    //   }
    // ) {
    //   state.cars.push({
    //     name: action.payload.name,
    //     cost: action.payload.cost,
    //     id: nanoid(),
    //   });
    // },
    removeCar(state, action: { type: string; payload: string }) {
      state.cars = state.cars.filter((car) => car.id !== action.payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(addCar, (state, action) => {
      state.cars.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    });
  },
});

export const carsReducer = carsSlice.reducer;
export const { changeSearchTerm, removeCar } = carsSlice.actions;
