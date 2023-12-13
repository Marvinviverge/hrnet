import { configureStore } from "@reduxjs/toolkit";

import { employeeSlice } from "./employeeSlice.js";

/**
 * Configuration du store Redux pour la gestion de l'état des employés.
 */
export const store = configureStore({
    reducer: {
        Employees: employeeSlice.reducer,
    }
})