import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
      navigator.userAgent
    );

    if (isMobile) {
   
      setLoading(false);
    } else {
     
      const timer1 = setTimeout(() => {
        setLoading(false);
      }, 2000);

      // Cleanup function
      return () => clearTimeout(timer1);
    }
  }, [location]);

  if (!loading) return null;

  return (
    <div id="preloader" className="preloader">
      <div className="loader_line"></div>
      <div className="absolute w-20 h-20 transition-all delay-300 -translate-x-1/2 -translate-y-1/2 rounded-full logo top-1/2 left-1/2 bg-nightBlack border-greyBlack flex-center">
        <img src="assets/img/site-logo.svg" alt="Minfo" />
      </div>
    </div>
  );
};

export default Preloader;
