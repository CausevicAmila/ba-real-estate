import React from "react";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
function Home() {
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

export default Home;
