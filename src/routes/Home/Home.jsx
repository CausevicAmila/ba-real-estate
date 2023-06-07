import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Home.css";
import Footer from "../../components/Footer/Footer";
import Card from '../../components/Card/Card';

function Home() {
  return (
    <div >
      <Navbar />
      <section >
        <div className="search-bar"> 
           <SearchBar/>
        </div>
        <div className="image object-cover">
          <img src="../src/public/home.png" alt="" />
        </div>
        <Card />
      </section>
      <Footer /> 
    </div>
  );
}

export default Home;
