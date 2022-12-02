import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './slices/auth/authSlice'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
}
const userPersistConfig = {
  key: 'user',
  storage,
}
const persistedReducer = persistReducer(persistConfig, authSlice.reducer)

export const store = configureStore({
  reducer: persistedReducer,
  // devTools: process.env.NODE_ENV !== 'production',
 // middleware: [thunk]
})


export const persistor = persistStore(store)

// export const store = configureStore({
//   reducer: {
//     auth: authSlice.reducer
//   },
// })
/// Store configurado como multiple
// export const store = configureStore({
//   reducer: {
//     auth: authSlice.reducer
//   },
// })