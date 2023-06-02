import React from "react";
import Navbar from "../components/Navbar/Navbar";
import SearchBar from "../components/SearchBar/SearchBar";
import "./pages.css";
function Home() {
  return (
    <section className="h-screen">
        <Navbar />
        <div className="search-bar"> 
           <SearchBar/>
        </div>
        <div className="image object-cover">
          <img src="../src/public/home.png" alt="" />
        </div>
        
    </section>
    
    
  );
}

export default Home;
