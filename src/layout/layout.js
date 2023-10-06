import React from 'react';

import { Outlet } from 'react-router-dom';

import './layout.css'
import Header from '@/components/header/header.js';
import Footer from '@/components/footer/footer.js';

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