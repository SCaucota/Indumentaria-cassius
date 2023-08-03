import * as React from 'react';
import NavBar from "./NavBar";

const NavBarContainer = () => {

    const pages = ['Remeras', 'Pantalones'];

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <>
            <NavBar
                pages={pages}
                anchorElNav={anchorElNav}
                setAnchorElNav={setAnchorElNav}
                handleOpenNavMenu={handleOpenNavMenu}
                handleCloseNavMenu={handleCloseNavMenu}
            />
        </>
    );
}

export default NavBarContainer;