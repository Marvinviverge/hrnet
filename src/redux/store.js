import { configureStore } from "@reduxjs/toolkit";

import { employeeSlice } from "@/redux/employeeSlice.js";

export const store = configureStore({
    reducer: {
        Employees: employeeSlice.reducer,
    }
})