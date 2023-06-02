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
    </section>
    
    
  );
}

export default App;
