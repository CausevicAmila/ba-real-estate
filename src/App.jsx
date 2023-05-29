import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, BrowserRouter as Routes } from "react-router-dom";
import Sales from './routes/Sales'
import SearchBar from "./components/SearchBar/SearchBar";
function App() {
  return (
    <section className="h-screen">
        <Navbar />
        <div className="search-bar"> 
           <SearchBar/>
        </div>
        <div className="image">
          <img src="../src/public/home.png" alt="" />
        </div>
        
    </section>
    
    
  );
}

export default App;
