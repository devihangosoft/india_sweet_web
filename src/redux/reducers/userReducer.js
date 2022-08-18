import { createReducer } from '@reduxjs/toolkit'

const initialState = {
  user : null
}

export const userReducer = createReducer(initialState , {
    setUserDetails : (state, action) =>{        
        state.user = action.payload;        
    },    
})
