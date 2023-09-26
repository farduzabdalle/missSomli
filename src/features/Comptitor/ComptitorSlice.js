import { createSlice } from "@reduxjs/toolkit";
import comptitors from "../../assets/comptitors.json"
const initialState={
    comptitors:JSON.parse(window.localStorage.getItem('competitors')) || comptitors,
    currentComptitor:null,
    voteCount:0

}
const ComptitorSlice=createSlice({
    name:"comptitor",
    initialState,
    reducers:{
        setCurrentComptitor:(state,action)=>{
            state.currentComptitor=action.payload;
        },
        increasevote:(state)=>{
            state.voteCount=state.voteCount+1;
        },
        decreasevote:(state)=>{
            state.voteCount=state.voteCount-1;
        },
       
        addVoteToComptitor: (state, action) => {

            let compIndex = state.comptitors.findIndex((value, index, array) => value.Id == action.payload);
            state.comptitors[compIndex].NumberofVotes = Number(state.comptitors[compIndex].NumberofVotes) + Number(state.voteCount);
            window.localStorage.setItem('competitors', JSON.stringify(state.comptitors));
        },
        resetState:(state)=>{
            state.currentComptitor=null;
            state.voteCount=0;

        }

    }
})
export default ComptitorSlice.reducer;
export const {setCurrentComptitor,increasevote,decreasevote,addVoteToComptitor,resetState}=ComptitorSlice.actions;