import { configureStore } from "@reduxjs/toolkit";

import { employeeSlice } from "./employeeSlice.js";

export const store = configureStore({
    reducer: {
        Employees: employeeSlice.reducer,
    }
})