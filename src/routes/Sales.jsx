import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import SearchBar from '../components/SearchBar/SearchBar';
import PropertyCard from '../components/Property/PropertyCard';
import Footer from '../components/Footer/Footer';
import './Sales.css';
import Sort from '../components/Dropdown/Sort/Sort';
import DropdownMenu from '../components/Dropdown/DRopdown';
function Sales() {
    return(
        <>
        <section className="h-screen">
            <Navbar />
            <div className="search-bar"> 
                <SearchBar/>
            </div>
            <div className='container'>
                <div className='h-text text-primary uppercase text-2xl leading-8 font-inter font-semibold'>
                    <p className='mt-6'>Sales</p> 
                    <p className='text-darkgray text-lg leading-7 font-inter font-normal lowercase'>8 of 587</p>
                </div>
                <div className='dropdown'>
                    <DropdownMenu />
                </div>
                <div className='sort'>
                    <Sort />
                </div>

            </div>
            <PropertyCard />
            <Footer />
        </section>
        </>
    );
  

}


export default Sales;