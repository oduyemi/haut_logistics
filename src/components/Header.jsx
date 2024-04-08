import { Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import "../assets/css/style.css";



export const Header = () => {
    return(
        <Box className="header_section">
            <nav className="destop_header navbar navbar-expand-lg navbar-light bg-light">
                <Box className="logo"></Box>
                <Box className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="">About</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="logo_main" to="/"><img src={require("../assets/images/logo/logo.png")} /></Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="">Blog</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="">Contact</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="#"><img src="images/search-icon.png" /></Link>
                    </li>              
                </ul>
                </Box>
            </nav>
            <nav className="mobile_header navbar navbar-expand-lg navbar-light bg-light">
                <Box className="logo_main"><Link to="/"><img src={require("../assets/images/logo/logo.png")} /></Link></Box>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent2"aria-controls="navbarSupportedContent2" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <Box className="collapse navbar-collapse" id="navbarSupportedContent2">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="">About</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="logo_main" to="/"><img src={require("../assets/images/logo/logo.png")} /></Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="">Blog</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="">Contact</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="#"><img src="images/search-icon.png" /></Link>
                    </li>             
                </ul>
                </Box>
            </nav>
        </Box>
    )
}