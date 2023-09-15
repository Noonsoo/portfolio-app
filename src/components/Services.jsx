import { BiCheck } from "react-icons/bi"
import "./services.css"

function Services() {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
      <article className="service">
        <div className="service__head">
          <h3>Website Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Responsive Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Performance Optimization</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Single Page Application</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Cross Browser Compatibility</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web Accesibility</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>User Interface(UI) Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Version Control</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Frontend Testing</p>
            </li>
          </ul>
        
      </article>

      
            

      </div>
</section>
  )
}

export default Services

