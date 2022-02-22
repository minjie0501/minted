import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

// Define a type for the slice state
interface LoginModalState {
  value: boolean;
}

// Define the initial state using that type
const initialState: LoginModalState = {
  value: false,
};

export const loginModalSlice = createSlice({
  name: "loginModal",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    showModal: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { showModal } = loginModalSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectLoginModal = (state: RootState) => state.showLoginModal.value

export default loginModalSlice.reducer;
