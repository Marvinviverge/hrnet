import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Home, Create, Error } from '@/pages/public/index.js'

import Layout from '@/layout/layout.js';

/**
 * Composant React représentant le routeur public de l'application.
 * @function PublicRouter
 * @returns {React.Component} Composant React créant le routeur public.
 */
const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>

                <Route path="" element={<Navigate to="/home" />} />

                <Route path="/home" element={<Home />} />
                <Route path="/create-employee" element={<Create />} />

                <Route path="*" element={<Error />} />
            </Route>
        </Routes>

    );
};

export default PublicRouter;