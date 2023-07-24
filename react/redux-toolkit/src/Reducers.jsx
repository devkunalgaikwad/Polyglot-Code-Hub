import {createReducer} from '@reduxjs/toolkit'

const initialState = {
    c:0,
}
const Reducers = createReducer(initialState,{
    increment:(state,action)=>{
        state.c+=1;
    },
    incrementByValue:(state,action)=>{
        state.c+=1;
        state.c+= action.payload;
    },
    decrement:(state,action)=>{
        state.c-=1;
    }
})

export default Reducers