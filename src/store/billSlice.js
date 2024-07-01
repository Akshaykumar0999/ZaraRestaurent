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
        },
        setTableBill:(state,action)=>{
            state.orderId=action.payload.order.id;
            state.orderTypeId=action.payload.order.orderTypeId;
            state.orderItems=action.payload.orderItems;
            state.paymentTypeId=1000;
            state.totalAmount=action.payload.order.finalTotal;
            localStorage.setItem("bill",JSON.stringify(state));
        },
        setPaymentType:(state,action)=>{
            state.paymentTypeId=action.payload;
            localStorage.setItem("bill",JSON.stringify(state));
        }
    }
})

export const {setBill,setTableBill,setPaymentType}=cartSlice.actions;

export default cartSlice.reducer;