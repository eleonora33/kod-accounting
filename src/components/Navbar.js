import React, {useState} from "react";
import logo from '../assets/images/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
    <div className="logo">
    <Link className="navbar-brand" aria-current="page" to="/"><img className='logo' src={logo} alt="logo" /></Link>
    </div>
    <button className="navbar-toggler" 
    type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" 
    aria-expanded={isNavOpen ? 'true' : 'false'}
    aria-label="Toggle navigation"
    onClick={toggleNav}
    >
    <FontAwesomeIcon  icon={faBars} />
    </button>
    <div className={`collapse navbar-collapse${isNavOpen ? ' show' : ''}`} id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Дома</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/about">За нас</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/services">услуги</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/team">нашиот тим</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/contact">контакт</Link>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar;
