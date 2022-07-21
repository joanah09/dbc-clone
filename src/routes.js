import React, {Component} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Contact from "./pages/contact";
import About from "./pages/about";
import Home from "./pages/home";



class RoutesURL extends Component {
    render() {
        return (
            <React.StrictMode>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </BrowserRouter>
            </React.StrictMode>
        )
    }
}

export default RoutesURL