import { createSlice, nanoid } from "@reduxjs/toolkit";

interface Car {
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
    changeTerm(state, action: { type: string; payload: string }) {
      state.searchTerm = action.payload;
    },
    addCar(
      state,
      action: {
        type: string;
        payload: Car;
      }
    ) {
      state.cars.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCar(state, action: { type: string; payload: string }) {
      state.cars = state.cars.filter((car) => car.id !== action.payload);
    },
  },
});

export const carsReducer = carsSlice.reducer;
export const { changeTerm, addCar, removeCar } = carsSlice.actions;
