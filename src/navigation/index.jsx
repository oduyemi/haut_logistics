import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import Home from "../pages/Home";


export const Navigation = () => {
    return(
        <>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
        </>

    )
}