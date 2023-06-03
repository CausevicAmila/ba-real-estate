import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Home.css";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <section className="h-screen">
        <div className="search-bar"> 
           <SearchBar/>
        </div>
        <div className="image object-cover">
          <img src="../src/public/home.png" alt="" />
        </div>
      </section>
      <Footer /> 
    </div>
  );
}

export default Home;
