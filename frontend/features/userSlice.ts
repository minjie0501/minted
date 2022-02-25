import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

// TODO: change interface
// Define a type for the slice state
interface UserState {
  value: {
    [key: string]: any;
  };
}

// Define the initial state using that type
const initialState: UserState = {
  value: {},
};

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{}>) => {
      state.value = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectLoginModal = (state: RootState) => state.showLoginModal.value

export default userSlice.reducer;
