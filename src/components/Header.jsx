import React, { useState } from "react";
import { Box } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";

export const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
      setIsMobileMenuOpen(false);
    };

    return (
        <>
            <Box className="header_section">
                <nav className="destop_header navbar navbar-expand-lg navbar-light bg-light">
                    <Box className="logo"></Box>
                    <Box className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <ScrollLink className="nav-link" to="home" smooth={true} duration={500} onClick={closeMobileMenu}>Home</ScrollLink>
                            </li>
                            <li className="nav-item">
                                <ScrollLink className="nav-link" to="about" smooth={true} duration={500} onClick={closeMobileMenu}>About</ScrollLink>
                            </li>
                            <li className="nav-item">
                                <ScrollLink className="logo_main" to="services" smooth={true} duration={500} onClick={closeMobileMenu}>
                                    <img src={require("../assets/images/logo/logo.png")} alt="logo" width="50%" />
                                </ScrollLink>
                            </li>
                            <li className="nav-item">
                                <ScrollLink className="nav-link" to="faqs" smooth={true} duration={500} onClick={closeMobileMenu}>FAQs</ScrollLink>
                            </li>
                            <li className="nav-item me-5">
                                <ScrollLink className="nav-link me-5" to="contact" smooth={true} duration={500} onClick={closeMobileMenu}>Contact</ScrollLink>
                            </li>
                        </ul>
                    </Box>
                </nav>
                <nav className="mobile_header navbar navbar-expand-lg navbar-light bg-light">
                    <Box className="logo_main ms-5 ps-5">
                        <img src={require("../assets/images/logo/logo.png")} alt="logo" width="70%" className="ps-5 mx-auto" />
                    </Box>
                    <button className="navbar-toggler ms-2 " type="button" onClick={toggleMobileMenu} aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Box className={"collapse navbar-collapse " + (isMobileMenuOpen ? 'show' : '')} id="navbarSupportedContent2">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <ScrollLink className="nav-link" to="home" smooth={true} duration={500} onClick={closeMobileMenu}>Home</ScrollLink>
                            </li>
                            <li className="nav-item">
                                <ScrollLink className="nav-link" to="about" smooth={true} duration={500} onClick={closeMobileMenu}>About</ScrollLink>
                            </li>
                            <li className="nav-item">
                                <ScrollLink className="nav-link" to="services" smooth={true} duration={500} onClick={closeMobileMenu}>Services</ScrollLink>
                            </li>
                            <li className="nav-item">
                                <ScrollLink className="nav-link" to="faqs" smooth={true} duration={500} onClick={closeMobileMenu}>FAQs</ScrollLink>
                            </li>
                            <li className="nav-item">
                                <ScrollLink className="nav-link" to="contact" smooth={true} duration={500} onClick={closeMobileMenu}>Contact</ScrollLink>
                            </li>
                        </ul>
                    </Box>
                </nav>
            </Box>
        </>
    )
}
