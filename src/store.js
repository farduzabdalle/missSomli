import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./features/modal/modalSlice";
import ComptitorReducer from "./features/Comptitor/ComptitorSlice";
export const store=configureStore({
    reducer:{
      modal:modalReducer,
      comptitor:ComptitorReducer

    }
});