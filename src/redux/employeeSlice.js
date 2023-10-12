import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    employeesList: [
        {
            firstname: 'Marvin',
            lastname: 'Viverge',
            birth: '24 Mars 1994',
            startdate: '01 Janvier 2023',
            street: '10 Rue JFK',
            state: 'France',
            city: 'ST-MAX',
            department: 'Dev',
            zipcode: '54130'
        }
    ],
}

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