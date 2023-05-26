import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <section className='h-wrapper'>
        <div className='Header h-container' > 
            <a href='/'> 
                <img src='/balogo.png' alt='logo' width={200}/> 
            </a>
            <div className='h-menu'> 
                <a href='/sales'> SALES</a>
                <a href='/rentals'> RENTALS</a>
                <a href='/aboutus'> ABOUT US</a>
            </div>
            <div className='h-menu'>
            <a href='/login'> LOG IN</a> 
            </div>
        </div>
    </section>
  )
}

export default Header