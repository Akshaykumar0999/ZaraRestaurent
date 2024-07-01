import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = JSON.parse(localStorage.getItem("state")) ?? {
        cart:[],
        totalAmount :0,
        finalTotal : 0,
        totalDiscount:0,
        orderTypeId: 12,
        paymentTypeId : 1000
  };

export const cartSlice= createSlice({
    name:"cart",
    initialState,
    reducers:{
        add:(state,action)=>{
            console.log(action)
            let item=action.payload;
            console.log(item.id)
            
            
            item={...item,qty:1}
            item.subTotal=(parseFloat(item.qty*item.price).toFixed(2));
            state.cart.push(item);
            state.totalAmount=state.totalAmount+action.payload.qty*action.payload.price;
            localStorage.setItem('state',JSON.stringify(state));
                
            
        },
        remove:(state,action)=>{
            console.log("clickemed" ,action.payload)
            
            state.cart=state.cart.filter((elem)=>elem.id!==action.payload);
            localStorage.setItem('state',JSON.stringify(state));
        },
        increment:(state,action)=>{
            console.log(action.payload)
            const indexInCart=state.cart.findIndex((elem)=>elem.id==action.payload);
            console.log(state.cart[indexInCart].qty)
            state.cart[indexInCart].qty=state.cart[indexInCart].qty+1;
            state.cart[indexInCart].subTotal=(parseFloat(state.cart[indexInCart].qty*state.cart[indexInCart].price).toFixed(2));
            localStorage.setItem('state',JSON.stringify(state));
        }, 
        decrement:(state,action)=>{
            const indexInCart=state.cart.findIndex((elem)=>elem.id==action.payload);
            if(state.cart[indexInCart].qty>1){
                state.cart[indexInCart].qty=state.cart[indexInCart].qty-1;
                state.cart[indexInCart].subTotal=(parseFloat(state.cart[indexInCart].qty*state.cart[indexInCart].price).toFixed(2));
            }else{
                state.cart=state.cart.filter((elem)=>elem.id!=action.payload);
            }
            localStorage.setItem('state',JSON.stringify(state));
            
        },
        setTotalAmount:(state)=>{
           
            let updatedTotal=state.cart?.reduce((accumlator,item)=>accumlator+Number(item.subTotal),0);
            updatedTotal=(parseFloat(updatedTotal).toFixed(2));
            state.totalAmount=updatedTotal;
            localStorage.setItem('state',JSON.stringify(state));
        },
        setOrderType:(state,action)=>{
            
            state.orderTypeId=action.payload;
            localStorage.setItem('state',JSON.stringify(state));
        },
        clearCart:(state)=>{
            state.cart=[];
            state.totalAmount=0;
            state.finalTotal=0;
            state.totalDiscount=0;
          localStorage.setItem('state',JSON.stringify(state));
        },
        setTableCart:(state,action)=>{
            state.cart=action.payload;
            localStorage.setItem('state',JSON.stringify(state));
        }
    }
})

export const {add,remove,increment,decrement,setTotalAmount,clearCart,setOrderType,setTableCart}=cartSlice.actions;

export default cartSlice.reducer;