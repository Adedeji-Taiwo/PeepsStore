import React, { useState, useEffect, useRef } from 'react';
import './header.css';
import brandlogo from '../../assests/images/logo/logo.png';
import { Link } from 'react-scroll';



const Header = () => {
   const [isSticky, setSticky] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [activeNav, setActiveNav] = useState('');
    const navRef = useRef();
    const navTogglerRef = useRef();
    const navBarCollapseRef = useRef();
   
   
    useEffect(() => {
        const sticky = navRef.current.offsetTop;
        const scrollCallBack = window.addEventListener("scroll", () => {
        if (window.pageYOffset > sticky ) {
            setSticky(true)        
        } else {
            setSticky(false)       
        }
        });
        return () => {
        window.removeEventListener("scroll", scrollCallBack);
        };
    }, []);


    //toggling menu icon
    const menuToggle = () => {
        setToggle(!toggle);
    }



    const closeMenu = () => {
        navBarCollapseRef.current.classNameList.remove('show');
        navTogglerRef.current.classNameList.remove('active');
        navTogglerRef.current.classNameList.add('collapsed');
        setToggle(!toggle);
    };

  return (
    <header className="header">
    <div className={`navbar-area ${isSticky ? 'sticky' : ''}`} ref={navRef}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg">
              <p className="navbar-brand">
                <img src={brandlogo} alt="Logo" />
              </p>
              <button className={`navbar-toggler  mobile-menu-btn ${toggle ? 'active' : 'collapsed'}`} type="button"  onClick={menuToggle} ref={navTogglerRef}>
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
            </button>
                              
              <div  className={`collapse navbar-collapse sub-menu-bar ${toggle ? 'show' : ''}`} ref={navBarCollapseRef} >
              <div className="ms-auto">
                <ul id="nav" className="navbar-nav ms-auto">
                    <li className="nav-item">
                    <Link to="home" smooth={true} duration={100} spy={true} className={activeNav === '#home' ? 'page-scroll active' : ''} onClick={() => {setActiveNav('#home'); closeMenu();}}>Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="add" smooth={true} duration={100} spy={true} className={activeNav === '#features' ? 'page-scroll active' : ''} onClick={() => {setActiveNav('#add'); closeMenu();}}>Add User</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="list" smooth={true} duration={100} spy={true} className={activeNav === '#latest' ? 'page-scroll active' : ''} onClick={() => {setActiveNav('#list'); closeMenu();}}>Peeps List</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="subscribe" smooth={true} duration={100} spy={true} className={activeNav === '#about' ? 'page-scroll active' : ''} onClick={() => {setActiveNav('#subscribe'); closeMenu();}}>Subscribe</Link>
                    </li>
                </ul>
        </div>
            </div>

                    
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>

  )
}

export default Header;
