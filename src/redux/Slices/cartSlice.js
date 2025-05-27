import { createSlice } from "@reduxjs/toolkit";
import toast, { Toaster } from 'react-hot-toast';


export const cartSlice = createSlice({
    name:"cart",
    initialState: [],
    reducers: {
        addToCart: (state, action)=>{
            state.push(action.payload);
            toast.success('Item added to cart');
        },
        removeFromCart: (state, action)=>{
            state = state.filter(item => item.id!==action.payload.id);
            toast.success("Item is deleted from the cart")
            return state;
        },
        checkoutCart: (state)=>{
            toast.success("Checkout successful!");
            return [];
        },
        clearCart: (state)=>{
            toast.success("Cart cleared");
            return [];
        }

    }
});

export const {addToCart, removeFromCart, checkoutCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;