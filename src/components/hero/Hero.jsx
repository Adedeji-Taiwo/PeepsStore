import React from 'react'
import './hero.css';
import hero from '../../assests/images/hero/Personal info.svg';


const Hero = () => {
  return (
    <section id="home" className="hero-section">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-10">
          <div className="hero-content">
                          <h1>User data storage  is the job of <span>PeepStore</span></h1>
                          <p>Save all your user details on the go! We do the heavy lifting for you.</p>
                          
                          <a href="#add" className="main-btn btn-hover">Get Started</a>
          </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 offset-xxl-1">
                      <div className="hero-image text-center text-lg-start">
                          <img src={hero} alt="hero" />
                      </div>
                  </div>
      </div>
          </div>
  </section>
  )
}

export default Hero