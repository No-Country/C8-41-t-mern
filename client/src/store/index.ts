import { configureStore } from "@reduxjs/toolkit";
import userData from "./slices/user.slice"

export const store = configureStore({
  reducer: {
    userData
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch