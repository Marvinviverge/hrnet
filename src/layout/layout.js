import React from 'react';

import { Outlet } from 'react-router-dom';

import './layout.css'
import Header from '@/components/header/header.js';
import Footer from '@/components/footer/footer.js';

/**
 * Composant React représentant la mise en page principale de l'application.
 * @function Layout
 * @returns {React.Component} Composant React pour la mise en page globale.
 */
const Layout = () => {
    return (
        <div className='Layout'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;