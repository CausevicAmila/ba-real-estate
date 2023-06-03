import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import SearchBar from '../components/SearchBar/SearchBar';
function Sales() {
    return(
        <>
        <section className="h-screen">
            <Navbar />
            <div className="search-bar"> 
                <SearchBar/>
            </div>
        </section>
        </>
    );
  

}


export default Sales;