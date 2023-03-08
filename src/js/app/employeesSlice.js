import {createSlice} from "@reduxjs/toolkit";

const
    // create a slice to manage the employees list
    employeesSlice = createSlice({
        // slice name
        name: `employees`,
        // initial state for the slice
        initialState: {
            // starting with an empty list ...
            list: []
        },
        // reducers for the slice (create reducers and export action creator functions)
        reducers: {
            add: (state, action) => {
                // add employee to list
                state.list.push(action.payload);
            }
        }
    }),
    // retrieve the action creator function from the slice reducer (action type : employees/add)
    {add} = employeesSlice.actions,
    // retrieve the global reducer function for the slice
    employeesReducer = employeesSlice.reducer,
    // state selector for user account slice
    selectEmployees = state => state.employees;

// action creators and slice reducer are now available for export.
export {add, employeesReducer, selectEmployees};