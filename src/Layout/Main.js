import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';
import Navbar from '../Pages/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar><br /><br /><br /><br /><br /><br />
            <Outlet></Outlet><br /><br /><br /><br />
            <Footer></Footer>
        </div>
    );
};

export default Main;