import React from 'react';
import { Outlet } from "react-router-dom"
import NavBarContainer from "./navbar/NavBarContainer";
import Footer from './footer/Footer';

const Layout = () => {
    return (
        <>
            <NavBarContainer/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Layout