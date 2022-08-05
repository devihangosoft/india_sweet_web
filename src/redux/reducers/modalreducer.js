import { createReducer } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
  content: <h1>Modal</h1>
}

export const modalReducer = createReducer(initialState , {
    openModal : (state, action) =>{
        state.isOpen = true;
        state.content = action.payload;        
    },
    closeModal : (state, action) =>{
      state.isOpen = false;
  },

})
