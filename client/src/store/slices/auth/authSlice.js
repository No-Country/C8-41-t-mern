import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
name: 'auth',
initialState: {
        status: 'checking',
        user: {},
        errorMessage: undefined, 
        
        
  },
  reducers: {
      onChecking: (state) => {
            state.status = 'checking';
            state.user = {};
            state.errorMessage = undefined;

       },
       onLogin: (state, { payload }) => {
          state.status = 'authenticated';
          state.user = payload;
          state.errorMessage = undefined;
          state.user.cart = payload.cart;

       },
       onLogout: (state, { payload }) => {
          state.status = 'not-authenticated';
          state.user.cart =null;
          state.user = {};
          state.errorMessage = payload;

       },

       onEditMyProfile: (state, { payload }) => {
         state.user = payload,
         state.errorMessage = undefined
       },
       onEditProfile: (state, { payload }) => {
         
       },

       onAddToCart: (state, { payload }) => {

         state.user.cart = payload.cart,

        
         state.errorMessage = undefined

       },
       onDeleteCart: (state, { payload }) => {
         state.user.cart = []
       },
       onUpdateCartQuantity: (state, { payload }) => {
         state.user.cart = payload

       },

      

       clearErrorMessage: (state) => {
          state.errorMessage = undefined
       }

      },
   });


// Action creators are generated for each case reducer function
export const { onLogin, onChecking, onLogout, clearErrorMessage, onEditProfile, onEditMyProfile, onAddToCart, onDeleteCart, onUpdateCartQuantity } = authSlice.actions;