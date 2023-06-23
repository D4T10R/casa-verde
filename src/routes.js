import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./globalStyle";
import React from 'react';


import PaginaInicial from "./pages/PaginaInicial/PaginaInicial.js";



function AppRoutes() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path='/' element={<PaginaInicial />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;