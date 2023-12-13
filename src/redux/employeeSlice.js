import { createSlice } from "@reduxjs/toolkit"


/**
 * État initial de la slice "Employees".
 * @type {Object}
 * @property {Array} employeesList - Liste initiale des employés.
 */
const initialState = {
    employeesList: [

    ],
}

/**
 * Slice Redux pour gérer l'état des employés.
 */
export const employeeSlice = createSlice({
    name: "Employees",
    initialState,
    reducers: {
        addEmployee: (state, action) => {
            state.employeesList.push(action.payload.newEmployee)
        },
    },
}

)