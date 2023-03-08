import {configureStore} from "@reduxjs/toolkit";
import {employeesReducer} from "./employeesSlice.js";

const store = configureStore({
    reducer: {
        // employees reducer
        employees: employeesReducer
    }
});

export {store};