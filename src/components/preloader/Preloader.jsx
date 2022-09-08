import React, { useState, useEffect } from 'react';
import './preloader.css';


const Preloader = () => {
    const [loader, setLoader] = useState(true);
    
    useEffect(() => {
     if (loader) {
         setTimeout(() => {
             setLoader(false);
         }, 2000)
     } 
    }, [loader]);

  return (
   <>
    {!loader ? ('') : (
        <div className="preloader">
        <div className="loader">
            <div className="spinner">
            <div className="spinner-container">
                <div className="spinner-rotator">
                <div className="spinner-left">
                    <div className="spinner-circle"></div>
                </div>
                <div className="spinner-right">
                    <div className="spinner-circle"></div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    )}
   </>
  )
}

export default Preloader;