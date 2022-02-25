import { configureStore } from '@reduxjs/toolkit'
import loginModalReducer from './loginModalSlice'
import userReducer from './userSlice'


export const store = configureStore({
  reducer: {
      loginModal : loginModalReducer,
      user: userReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch