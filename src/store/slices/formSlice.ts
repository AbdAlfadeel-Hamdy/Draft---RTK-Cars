import { createSlice } from "@reduxjs/toolkit";

// interface FormState {
//   name: string;
//   cost: number;
// }

// const initialState: FormState = {
//   name: "",
//   cost: 0,
// };

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    cost: 0,
  },
  reducers: {
    changeName(state, action: { type: string; payload: string }) {
      state.name = action.payload;
    },
    changeCost(state, action: { type: string; payload: number }) {
      state.cost = action.payload;
    },
  },
});

export const formReducer = formSlice.reducer;
export const { changeName, changeCost } = formSlice.actions;
