"use client"; // Указание на то, что это клиентский компонент

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-scroll";
import Image from "next/image";

const pages = [
  { pageName: "О нас", pageId: "about_us" },
  { pageName: "Услуги", pageId: "services" },
  { pageName: "Этапы работы", pageId: "stages_work" },
  { pageName: "Контакты", pageId: "contacts" },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [scrolled, setScrolled] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: scrolled ? "white" : "transparent",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
        transition: "background-color 0.3s ease",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Логотип с разделением цвета */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Poppins, sans-serif", // Применяем красивый шрифт для латиницы
              fontWeight: 700,
              fontSize: "28px", // Размер шрифта
              color: scrolled ? "black" : "#efefe", // Цвет зависит от прокрутки
              textDecoration: "none",
              transition: "color 0.3s ease",
              alignItems: 'center',
            }}
          >
            {scrolled ? (
              <Image
                src="/logoHead.2svg.svg"
                alt="Logo"
                width={55}
                height={55}
              />
            ) : (
              <Image src="/logoHead.svg" alt="Logo" width={50} height={50} />
            )}
            <span style={{ color: "#006400", marginLeft: '5px' }}>REEN</span>
            <span>CH</span>
          </Typography>

          {/* Мобильное меню */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              onClick={handleOpenNavMenu}
              sx={{
                color: scrolled ? "black" : "inherit",
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.pageId} onClick={handleCloseNavMenu} sx>
                  <Typography sx={{ textAlign: "center" }}>
                    <Link
                      to={page.pageId}
                      smooth={true}
                      duration={500}
                      onClick={handleCloseNavMenu}
                    >
                      {page.pageName}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Навигационные кнопки для десктопа */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", gap: "40px" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Link
                key={page.pageId}
                to={page.pageId}
                smooth={true}
                duration={500}
                style={{ textDecoration: "none" }}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: scrolled ? "black" : "white",
                    display: "block",
                    transition: "color 0.3s ease",
                    fontFamily: "Lora, serif", // Применяем шрифт Lora для русских символов
                    fontWeight: 600,
                    fontSize: "16px",
                  }}
                >
                  {page.pageName}
                </Button>
              </Link>
            ))}
          </Box>

          {/* Номер телефона в правой части */}
          <Box
            sx={{
              ml: 3,
              display: "flex",
              alignItems: "center",
              color: scrolled ? "black" : "inherit",
              fontFamily: "Lora, serif", // Применяем шрифт Lora для номера
              fontWeight: 400,
              fontSize: "16px",
            }}
          >
            <Typography sx={{ fontSize: "18px", fontWeight: 500 }}>
              <a
                href="tel:+996555886168"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                +996 555 886 168
              </a>
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
