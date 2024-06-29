import { createSlice } from '@reduxjs/toolkit';

const initialState= JSON.parse(localStorage.getItem("user")) ?? {
    isLoggedIn:false,
    token: "no token",
    user:{}
};

export const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        setUser:(state,action)=>{
            state.isLoggedIn=true;
            state.token=action.payload.token;
            state.user=action.payload.user;
            localStorage.setItem("user",JSON.stringify(state));
        },
        logoutUser:(state)=>{
            state.isLoggedIn=false;
            state.token="no token";
            state.user={};
            localStorage.setItem("user",JSON.stringify(state));
            localStorage.setItem("token","no token");
         
        }
    }
})

export const {setUser,logoutUser}=authSlice.actions;

export default authSlice.reducer;