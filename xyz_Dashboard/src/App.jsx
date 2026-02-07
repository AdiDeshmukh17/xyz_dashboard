import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Home from "./Home";
import Sales from "./Sales";
import Quality from "./Quality";
import About from "./About";

export default function App() {
  return (
    <BrowserRouter>
      <div className="layout">
        
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/quality" element={<Quality />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}
