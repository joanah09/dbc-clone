import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
import Contact from "./pages/contact";
import About from "./pages/about";
import Home from "./pages/home";


function App() {
    return (
      <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
