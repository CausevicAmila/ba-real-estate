import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Home.css";
import Footer from "../../components/Footer/Footer";
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
        <Footer /> 
    </section>
    
    
  );
}

export default Home;
