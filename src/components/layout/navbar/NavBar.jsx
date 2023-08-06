import CartWidget from "../../common/CartWidget/CartWidget";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom"

const NavBar = ({ categories, anchorElNav, handleOpenNavMenu, handleCloseNavMenu }) => {
    return (
        <AppBar position="static" style={{ backgroundColor: "black"}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters >
                    <Link key="navBarBrand" to="/" style={{ textDecoration: 'none', color: 'inherit', display: "flex", alignItems: "center"}}>
                        <IconButton sx={{ display: { xs: 'none', md: 'flex' } }} >
                            <img style={{ paddingRight: "8px" }} src="https://res.cloudinary.com/dcwuqrvuv/image/upload/v1687407263/flor_1_s5kkm6.png" />
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Cassius
                        </Typography>
                    </Link>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem key="productosItem" onClick={handleCloseNavMenu}>
                                <Link key="productos" to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <Typography textAlign="center">Productos</Typography>
                                </Link>
                            </MenuItem>

                            {categories.map((category) => (
                                <MenuItem key={category.subCategory} onClick={handleCloseNavMenu}>
                                    <Link key={category} to={`/category/${category.subCategory.toLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <Typography textAlign="center">{category.subCategory}</Typography>
                                    </Link>
                                </MenuItem>
                            ))}

                            <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <MenuItem key="cartIconMovile" onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">Carrito</Typography>
                                </MenuItem>
                            </Link>
                        </Menu>
                    </Box>
                    <Box style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%"}}>
                        <Link key="brandRoute" to="/" style={{ textDecoration: 'none', color: 'inherit', display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <IconButton sx={{ display: { xs: 'flex', md: 'none' } }} >
                                <img style={{ paddingRight: "8px" }} src="https://res.cloudinary.com/dcwuqrvuv/image/upload/v1687407263/flor_1_s5kkm6.png" />
                            </IconButton>
                            <Typography
                                variant="h5"
                                noWrap
                                sx={{
                                    mr: 2,
                                    display: { xs: 'flex', md: 'none' },
                                    flexGrow: 1,
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                Cassius
                            </Typography>
                        </Link>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignItems: {md: "center"}, justifyContent: {md: "center"}, width: {md: "100%"}, }}>
                        <Link key="productsMovile" to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Button
                                key="productos"
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Productos
                            </Button>
                        </Link>
                        
                        {categories.map((category) => (
                            <Link key={category.subCategory} to={`/category/${category.subCategory.toLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {category.subCategory}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                    <Box>
                        <CartWidget />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavBar