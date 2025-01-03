import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    items: [],
  },
  reducers: {
    // reducers consists of all the actions and their corresponding reducer functions..
    addItem: (state, action) => { // action : (state,action)=> {} the state is modified based on the action 
      // action : (parameters)=>{}
        //mutating the state here(directly, modifying)...
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      // removing an item doesnt require any action
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0; //[]
    },
  },
});

export const{addItem, removeItem, clearCart} = cartSlice.actions; // actions should also be exported... 


export default cartSlice.reducer;// only one reducer is exported 
