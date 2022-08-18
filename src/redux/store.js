import { configureStore } from '@reduxjs/toolkit'
import { modalReducer } from './reducers/modalreducer';
import { userReducer } from './reducers/userReducer';


export const store = configureStore({
  reducer: {    
    modalReducer : modalReducer,
    userReducer : userReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
  
})


export default store;

