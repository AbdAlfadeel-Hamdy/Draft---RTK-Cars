import { configureStore } from "@reduxjs/toolkit";
import { addCar } from "./actions";
import { formReducer, changeName, changeCost } from "./slices/formSlice";
import {
  carsReducer,
  changeSearchTerm,
  // addCar,
  removeCar,
} from "./slices/carsSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
    cars: carsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export { store, changeName, changeCost, changeSearchTerm, addCar, removeCar };
