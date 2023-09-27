import "./footer.css"
import {BsGithub, BsLinkedin} from "react-icons/bs"
import {FiInstagram} from "react-icons/fi"

function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">Nwafor</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services" >Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.instagram.com/i_am_noonso/" target="_blank"><FiInstagram /></a>
        <a href="https://www.linkedin.com/in/nwafor-emmanuel-59999a1a8" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/Noonsoo" target="_blank"><BsGithub /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Nwafor's Website. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer