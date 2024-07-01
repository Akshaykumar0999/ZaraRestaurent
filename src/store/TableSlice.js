import { createSlice, current } from '@reduxjs/toolkit';

const initialState=JSON.parse(localStorage.getItem('tables')) ?? {
    tables :[],
    selectedTableId:0,
    currentTable:{},
    currentOrder:{},
    
}

export const tableSlice=createSlice({
    name:'tables',
    initialState,
    reducers:{
        setTables:(state,action)=>{
            state.tables=action.payload;
            localStorage.setItem('tables',JSON.stringify(state));
        },
        setSelectedTableId:(state,action)=>{
            state.selectedTableId=action.payload;
            localStorage.setItem('tables',JSON.stringify(state));
        },
        setCurrentTable:(state,action)=>{
            state.currentTable=action.payload;
            localStorage.setItem('tables',JSON.stringify(state));
        },
        setCurrentOrder:(state,action)=>{
            state.currentOrder=action.payload;
            localStorage.setItem('tables',JSON.stringify(state));
        }
    }
})

export const {setSelectedTableId,setTables,setCurrentTable,setCurrentOrder}=tableSlice.actions;

export default tableSlice.reducer;