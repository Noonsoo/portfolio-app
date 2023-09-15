import "./contact.css"
import {MdOutlineEmail} from "react-icons/md"
import { BsWhatsapp } from "react-icons/bs"
import {useRef} from "react"
import emailjs from "emailjs-com"

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_funwqoi', 'template_dcwwm08', form.current, '7XQoghpXeUmtJns3f')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };
  return (
    <section id="contact">
    <h5>Get In Touch</h5> 
    <h2>Contact Me</h2>
    <div className="container contact__container">
       <div className="contact__options">
        <article className="contact__option">
          <MdOutlineEmail className="contact__option-icon" />
          <h4>Email</h4>
          <h5>nwafornonso70@gmail.com</h5>
          <a href="mailto:nwafornonso70@gmail.com">Send a message</a>
        </article>

        <article className="contact__option">
          <BsWhatsapp className="contact__option-icon" />
          <h4>Whatsapp</h4>
          <h5>+2348146334317</h5>
          <a
        href="https://wa.me/2348146334317"
        target="_blank"
        rel="noopener noreferrer"
          >
       Send a message
         </a>
        </article>

        <article className="contact__option">
          <MdOutlineEmail className="contact__option-icon" />
          <h4>Email</h4>
          <h5>nwafornonso70@gmail.com</h5>
          <a href="mailto:nwafornonso70@gmail.com">Send a message</a>
        </article>


       </div>

       <form ref={form} onSubmit={sendEmail} >
        <input type="text" name="name" placeholder="Your Full Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" id="" rows="7"></textarea>
        <button className="btn btn-primary" type="submit">Send Message</button>
       </form>

    </div>
    </section>
  )
}

export default Contact