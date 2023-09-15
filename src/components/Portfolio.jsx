import "./portfolio.css"
import IMG1 from "../assets/portfolio1.jpg"
import IMG2 from "../assets/portfolio2.jpg"
import IMG3 from "../assets/portfolio3.jpg"
import IMG4 from "../assets/portfolio4.jpeg"


const data = [
  {
    id: 1,
    image: IMG1,
    title: "Amazon Clone",
    github: "https://github.com/Noonsoo/amazon-clone",
    demo: "https://amazoon-clone-367aa.web.app/",

  },
  {
    id: 2,
    image: IMG2,
    title: " Netflix Clone",
    github: "https://github.com/Noonsoo/Netflix-clone",
    demo: "https://netflix-yt-f8e8d.web.app/",

  },
  {
    id: 3,
    image: IMG3,
    title: "An Expense Tracker Application",
    github: "https://github.com/Noonsoo/react-expense-tracker",
    demo: " https://react-expense-tracker-50dab.web.app/",

  },
  {
    id: 4,
    image: IMG4,
    title: "A blog Application",
    github: "https://github.com/Noonsoo/react-blog",
    demo: "https://incandescent-valkyrie-399a45.netlify.app",

  },
  
]
function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image,title, github, demo}) => (
            <article className="portfolio__item">
            <div className="portfolio__item-image" key={id}>
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
            <a href={github} className="btn" target="_blank">Github</a>
            <a href={demo} className="btn btn-primary">  Live Demo</a>
            </div>
          </article>
          )

           )
        }
      </div>
    </section>
  )
}

export default Portfolio