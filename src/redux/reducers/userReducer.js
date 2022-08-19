import { createReducer } from '@reduxjs/toolkit'

const initialState = {
  user : null,
  isLoggedIn: true,
}

export const userReducer = createReducer(initialState , {
    setUserDetails : (state, action) =>{        
        state.user = action.payload; 
        state.isLoggedIn = true;       
    },    
    deleteUserDetails : (state, action) =>{        
        state.user = null;      
        state.isLoggedIn = false;      
    },    
})
