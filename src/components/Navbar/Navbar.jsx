import { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';


class Navbar extends Component{
  state = {clicked: false};
  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }
  render(){
    return (
      <nav className='NavbarItems bg-lightgray text-primary font-semibold font-inter text-2xl leading-8 uppercase '>
      <div className='logo'>
          <a href="/">
            <img src="/src/public/balogo.png" alt="logo" />
          </a>

        </div>
        <div className='menu-icons  text-primary font-semibold font-inter text-2xl leading-8' onClick={this.handleClick}> 
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
      
        </div>
          <ul className={this.state.clicked ? "nav-menu active text-primary font-semibold font-inter text-2xl leading-8  uppercase" : "nav-menu"} >
            {MenuItems.map((item, index) => {
              return(
                <li key={index} id = 'nav-link'>
                  <Link to = {item.url}>
                  {item.title}
                  </Link>
                </li>
              )
            })}
          
          </ul>
      </nav>
    )
  }
} 

export default Navbar;