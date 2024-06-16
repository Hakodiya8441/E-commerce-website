import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};
const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state,action) => {
      

     const find = state.cart.findIndex((value)=>value.id===action.payload.id)

     if(find != -1){
        state.cart[find] = {...state.cart[find],quantity: state.cart[find].quantity +1}
     }
     else{
      
        state.cart.push({...action.payload,quantity:1})
     }
    },
    deleteCart: (state,action)=>{
        state.cart = state.cart.filter((value)=>value.id !==action.payload.id)
    },
    allProductDelete:(state)=>{
       state.cart = []
    },
  },
});

export const { addToCart, deleteCart, allProductDelete } = cartSlice.actions;

export default cartSlice.reducer;
