import {AiOutlineHome, AiOutlineUser} from "react-icons/ai"
import {BiBook, BiMessageSquareDetail}  from "react-icons/bi"
import {RiServiceLine} from "react-icons/ri" 
import "./nav.css"
import { useState, useEffect } from "react"



function Nav() {
  const [activeNav, setActiveNav] = useState("#")


    const [showNavbar, setShowNavbar] = useState(false);
  
    useEffect(() => {
      // Function to handle scroll events
      function handleScroll() {
        // Check the scroll position
        if (window.pageYOffset > 100) {
          // If the user has scrolled down more than 100 pixels, show the navbar
          setShowNavbar(true);
        } else {
          // If the user is near the top, hide the navbar
          setShowNavbar(false);
        }
      }
  
      // Add scroll event listener when the component mounts
      window.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
  

  
  return (
    <div>
      {
        showNavbar && (
          <nav  className={`navbar ${showNavbar ? "show" : "hide"}`}>
          <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : "" }><AiOutlineHome/></a>
          <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : "" }  ><AiOutlineUser/></a>
          <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : "" } ><BiBook/></a>
          <a href="#services" onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? "active" : "" }><RiServiceLine /></a>
          <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : "" }><BiMessageSquareDetail /></a>
         </nav>

        )
      }
   
    </div>
  
  )
}



export default Nav