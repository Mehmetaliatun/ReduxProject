import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState, // if key and object same, we can write one of them with es6
  reducers: {
    //aciton type'lari alir ve degistirir.
    //reducer obje, key ve value aliyor(syntax bu sekilde).
    setUser: (state, { payload }) => {
      state.user = payload; // normalde action.payload olmasi gerekirken dest. yaptik.
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

//obje icinde const ile tanimlayamadigimiz icin export yaparken const oluyor(func)
export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;

//* slice metodu ile bunlari yazmamiza gerek kalmadi.
// export const SET_USER = "SET_USER"

// export const setUser=(payload)=>{
//     return {type:SET_USER, payload }
// }
//!Types
// export const SET_USER = "SET_USER"

//! action creators
// export const setUser = (payload)=>{
//   return {type:SET_USER, payload}
// }

//!reducer
