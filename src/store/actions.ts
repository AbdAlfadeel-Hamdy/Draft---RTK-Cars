import { createAction } from "@reduxjs/toolkit";
import { Car } from "./slices/carsSlice";

export const addCar = createAction<Car>("add/car");
