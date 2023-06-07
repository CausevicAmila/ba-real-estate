import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import SearchBar from '../components/SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
function Rentals() {
    return(
        <>
        <section className="h-screen">
         <Navbar />
            <div className="search-bar"> 
                <SearchBar/>
             </div>
             <div className='proba'>
                 <Link to="/apartments">
                    <button>Click</button>
            
                </Link>
            </div>
            <Footer />
        </section>
        </>
    );
  

}


export default Rentals;