import {configureStore} from "@reduxjs/toolkit";
import {employeesReducer} from "./employeesSlice.js";

const store = configureStore({
    reducer: {
        // employees reducer
        employees: employeesReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        // customize serialisation checking middleware ...
        serializableCheck: {
            // for a specific action
            ignoredActions: [ `employees/add` ],
            // enable non serializable data for date fields ...
            ignoredActionPaths: [ `meta.arg`, `payload.birthDate`, `payload.startDate` ],
            // enable non serializable data for specific paths in the state
            ignoredPaths: [ /employees\.employeeslist\.\d+\.(?:birthDate|startDate)/u ]
        }
    })

});

export {store};