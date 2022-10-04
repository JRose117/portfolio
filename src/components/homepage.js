import Bootstrap from '../images/Bootstrap.png'
import CSS from '../images/CSS3.png'
import Django from '../images/Django.png'
import Express from '../images/Express.png'
import GitHub from '../images/Github.png'
import Heroku from '../images/Heroku.png'
import HTML5 from '../images/HTML5.png'
import Insomnia from '../images/Insomnia.png'
import JavaScript from '../images/JavaScript.png'
import MongoDB from '../images/MongoDB.png'
import Mongoose from '../images/Mongoose.png'
import Netlify from '../images/Netlify.png'
import Nodejs from '../images/Nodejs.png'
import npm from '../images/npm.png'
import Postgresql from '../images/Postgresql.png'
import Python from '../images/Python.png'
import ReactIcon from '../images/reactlogo.png'
import SASS from '../images/SASS.png'
import VSCode from '../images/VSCode.png'
import Yarn from '../images/Yarn.png'
import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import Minesweeeper from '../images/minesweeper.png'
import Recipes from '../images/recipes.png'
import WatchIt from '../images/watchit.png'
import 'bootstrap/dist/css/bootstrap.css';

const images = [
  {
    name: "Bootstrap",
    imageSrc: Bootstrap,
  },
  {
    name: "CSS",
    imageSrc: CSS,
  },
  {
    name: "Django",
    imageSrc: Django,
  },
  {
    name: "Express",
    imageSrc: Express,
  },
  {
    name: "GitHub",
    imageSrc: GitHub,
  },
  {
    name: "Heroku",
    imageSrc: Heroku,
  },
  {
    name: "HTML5",
    imageSrc: HTML5,
  },
  {
    name: "Insomnia",
    imageSrc: Insomnia,
  },
  {
    name: "JavaScript",
    imageSrc: JavaScript,
  },
  {
    name: "MongoDB",
    imageSrc: MongoDB,
  },
  {
    name: "Mongoose",
    imageSrc: Mongoose,
  },
  {
    name: "Netlify",
    imageSrc: Netlify,
  },
  {
    name: "Node.js",
    imageSrc: Nodejs,
  },
  {
    name: "npm",
    imageSrc: npm,
  },
  {
    name: "Postgresql",
    imageSrc: Postgresql,
  },
  {
    name: "Python",
    imageSrc: Python,
  },
  {
    name: "React",
    imageSrc: ReactIcon,
  },
  {
    name: "Sass",
    imageSrc: SASS,
  },
  {
    name: "VSCode",
    imageSrc: VSCode,
  },
  {
    name: "Yarn",
    imageSrc: Yarn,
  },
];


const Homepage = () => {
  return (
    <>
       <main className="about-wrapper">
        <div className="about-container">
          <h1 className="about-title" > About </h1>
          <div className="about-intro">
            <h4>When I was 21 years old, in my first year out of University, I took part in the intensive Teach First Programme. The programme places graduates, with minimal training, into the countries’ most challenging schools. Through hard work, determination and by quickly implementing all feedback given to me, I developed a valued skill which I was incredibly proud of. As a maths teacher I achieved incredible grades for my students and have since held leadership positions in school. <br></br><br></br>I have recently completed the General Assembly boot camp, where the same hard work, perseverance and adaptability was needed. Over the 3 month programme, I completed four projects, covering HTML, CSS, JavaScript, MERN and Python/ Django. Throughout the course, I enjoyed the challenge of learning something totally new every day and having to adapt what I had just learnt to complete unfamiliar tasks. I am at the beginning of my journey as a software developer and so I am incredibly keen to keep learning and keep growing my skill set.  
</h4>
          </div>
        </div>
      </main>
      <div className='break'></div>
      <main className="projects-wrapper">
        <div className="projects-container">
          <h1 className="projects-title" > Projects </h1>
          <div className="projects-intro">
            <div style={{ display: 'block', width: 700, padding: 30 }}>
                  <Carousel interval={null}>
                    <Carousel.Item>
                      <div className="d-block w-100" data-bs-interval="false"> <img src={Minesweeeper} alt="Minesweeper"/> </div> 
                      <Carousel.Caption>
                        <h3>Label for first slide</h3>
                        <p>Sample Text for Image One</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="d-block w-100" data-bs-interval="false"> <img src={Recipes} alt="Recipes"/> </div> 
                      <Carousel.Caption>
                        <h3>Label for second slide</h3>
                        <p>Sample Text for Image Two</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="d-block w-100" data-bs-interval="false"> <img src={WatchIt} alt="WatchIt"/> </div> 
                      <Carousel.Caption>
                        <h3>Label for third slide</h3>
                        <p>Sample Text for Image Three</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </div>
          </div>
        </div>
      </main>
      <div className='break'></div>
      <main className="skills-wrapper">
        <div className="skills-container">
          <h1 className="skills-title" > Skills </h1>
          <div className="skills-intro">
          {images.map((image, index) => (
            <div className='Image' key={index}>
              <img className = 'skills-image' src={image.imageSrc} alt={image.name} />
              <div className = 'skills-name'>{image.name}</div>
            </div>
          ))}
          </div>
        </div>
      </main>
      <div className='break'></div>
      <main className="head-wrapper">
        <div className="head-container">
          <h1 className="head-title" > Header </h1>
          <div className="head-intro">
          <h4>When I was 21 years old, in my first year out of University, I took part in the intensive Teach First Programme. The programme places graduates, with minimal training, into the countries’ most challenging schools. Through hard work, determination and by quickly implementing all feedback given to me, I developed a valued skill which I was incredibly proud of. As a maths teacher I achieved incredible grades for my students and have since held leadership positions in school. <br></br><br></br>I have recently completed the General Assembly boot camp, where the same hard work, perseverance and adaptability was needed. Over the 3 month programme, I completed four projects, covering HTML, CSS, JavaScript, MERN and Python/ Django. Throughout the course, I enjoyed the challenge of learning something totally new every day and having to adapt what I had just learnt to complete unfamiliar tasks. I am at the beginning of my journey as a software developer and so I am incredibly keen to keep learning and keep growing my skill set.  
</h4>
          </div>
        </div>
      </main>
    </>
  )
}

export default Homepage