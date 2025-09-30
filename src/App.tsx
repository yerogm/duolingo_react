import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaPrincipal from "./components/PaginaPrincipal/App";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PaginaPrincipal />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
