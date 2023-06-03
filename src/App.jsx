import React from "react";
import { Route, Routes } from "react-router-dom";
import Sales from './routes/Sales'
import Home from './routes/Home';
import Rentals from './routes/Rentals';
import Contact from "./routes/Contact";
import AboutUs from './routes/AboutUs';
import Login from './routes/Login';
import Apartments from './routes/Apartments';

function App() {
  return (
    <section className="h-screen">
      <Routes>
        <Route path="/sales" element={<Sales />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/" element={<Home />} />
        <Route path="/apartments" element={<Apartments />} />
      </Routes>
    </section>
  );
}

export default App;
