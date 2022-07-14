import React, {Component} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Contact from "./pages/contact";
import Careers from "./pages/careers";


class RoutesURL extends Component {
    render() {
        return (
            <React.StrictMode>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<App />} />
                        <Route path="/careers" element={<Careers />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </BrowserRouter>
            </React.StrictMode>
        )
    }
}

export default RoutesURL