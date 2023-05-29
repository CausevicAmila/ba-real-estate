import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./routes/home";
import AboutUs from "./routes/AboutUs";
import SearchBar from "./components/SearchBar/SearchBar";
function App() {
  return (
    <section className="h-screen">
        <Navbar />
        <div className="search-bar"> 
           <SearchBar/>
        </div>
    </section>
    
    
  );
}

export default App;
