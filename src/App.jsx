import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Index from "./pages/index";
import Home from "./pages/home";

function App() {
    return (
        <html>
            <BrowserRouter>
            <Routes>
                <Route index element={<Index />}/>
                <Route path="/home" element={<Home />}/>
                <Route path="*" element={<Index />}/>
            </Routes>
            </BrowserRouter>
        </html>
    )
}

export default App
