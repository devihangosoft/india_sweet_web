import { configureStore } from '@reduxjs/toolkit'
import { modalReducer } from './reducers/modalreducer';


export const store = configureStore({
  reducer: {    
    modalReducer : modalReducer,
    
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
  
})


export default store;

