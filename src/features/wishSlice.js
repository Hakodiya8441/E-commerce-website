import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wish:[]
}

 const WishSlice = createSlice({
    name:"Wishlist",
    initialState,
    reducers:{
        addWishList:(state,action)=>{
          const item =  state.wish.findIndex((value)=>value.id === action.payload.id
        );

        if(item>=0){
            alert("This Product is already exist in your wishlist")
        }else{
            state.wish.push({...action.payload});
        }
        },
    },
});


export const {addWishList}= WishSlice.actions;

export default WishSlice.reducer;