import * as React from 'react';
import NavBar from "./NavBar";
import { useState } from 'react';
import { useEffect } from 'react';
import {getDocs, collection} from "firebase/firestore"
import {db} from "../../../fireBaseConfig";

const NavBarContainer = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try{
                const categoriesCollection = collection(db, "categories");
                const getCategories = await getDocs(categoriesCollection);
                const categoriesData = getCategories.docs.map((doc) => doc.data());
                setCategories(categoriesData);
            }catch (error) {
                console.error("Error: ", error);
            }
        };

        fetchCategories();
    },[])

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <>
            <NavBar
                categories={categories}
                anchorElNav={anchorElNav}
                setAnchorElNav={setAnchorElNav}
                handleOpenNavMenu={handleOpenNavMenu}
                handleCloseNavMenu={handleCloseNavMenu}
            />
        </>
    );
}

export default NavBarContainer;