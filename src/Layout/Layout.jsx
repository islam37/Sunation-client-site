import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const Layout = () => {
    return (
        <div>
           <header>
            <Navbar> </Navbar>
           </header>

           <main className='container mx-auto px-4 h-screen'>
            <Outlet></Outlet>
           </main>

           <footer>
            <Footer> </Footer>
           </footer>
        </div>
    );
};

export default Layout;