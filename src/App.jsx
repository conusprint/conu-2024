import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/home";
import Temp from "./pages/temp";

function App() {
    return (
        <html>
            <BrowserRouter>
            <Routes>
                <Route index element={<Home />}/>
                <Route path="/temp" element={<Temp />}/>
                <Route path="*" element={<Home />}/>
            </Routes>
            </BrowserRouter>
        </html>
    )
}

export default App
