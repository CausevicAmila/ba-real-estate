import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import SearchBar from '../components/SearchBar/SearchBar';
import PropertyCard from '../components/Property/PropertyCard';
function Sales() {
    return(
        <>
        <section className="h-screen">
            <Navbar />
            <div className="search-bar"> 
                <SearchBar/>
            </div>
            <PropertyCard />
        </section>
        </>
    );
  

}


export default Sales;