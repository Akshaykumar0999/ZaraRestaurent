import { createSlice } from '@reduxjs/toolkit';

const initialState= JSON.parse(localStorage.getItem("bill")) ?? {
    orderItems:[],
    orderId : 0
};

export const cartSlice=createSlice({
    name:"bill",
    initialState,
    reducers: {
        setBill:(state,action)=>{
            console.log("hello")
            state.orderItems=action.payload.cart;
            state.totalAmount=action.payload.totalAmount;
            // state.totalDiscount=action.payload.totalDiscount;
            state.orderTypeId=action.payload.orderTypeId;
            state.paymentTypeId=action.payload.paymentTypeId;
            state.orderId=action.payload.orderId;

            localStorage.setItem("bill",JSON.stringify(state));
        }
    }
})

export const {setBill}=cartSlice.actions;

export default cartSlice.reducer;