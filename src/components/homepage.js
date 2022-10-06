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
import Project4 from '../images/project4.png'
import LinkedIn from '../images/LinkedIn.png'
import EmailMe from '../images/EmailMe.png'
import Fudge from '../images/Fudge.png'
import Quiz from '../images/Quiz.png'
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
      <div className="break" id="about-break"></div>
       <main className="about-wrapper">
        <div className="about-container">
          <h1 className="about-title" > About </h1>
          <div className="about-intro">
            <h5>When I was 21 years old, in my first year out of University, I took part in the intensive Teach First Programme. The programme places graduates, with minimal training, into the countries’ most challenging schools. Through hard work, determination and by quickly implementing all feedback given to me, I developed a valued skill which I was incredibly proud of. As a maths teacher I achieved incredible grades for my students and have since held leadership positions in school. <br></br><br></br>I have recently completed the General Assembly boot camp, where the same hard work, perseverance and adaptability was needed. Over the 3 month programme, I completed four projects, covering HTML, CSS, JavaScript, MERN and Python/ Django. Throughout the course, I enjoyed the challenge of learning something totally new every day and having to adapt what I had just learnt to complete unfamiliar tasks. I am at the beginning of my journey as a software developer and so I am incredibly keen to keep learning and keep growing my skill set.  
</h5>
          </div>
        </div>
      </main>
      <div className='break' id="projects-break"></div>
      <main className="projects-wrapper">
        <div className="projects-container">
          <h1 className="projects-title" > Projects </h1>
          <div className="projects-intro">
            <Carousel interval={null}>
              <Carousel.Item>
              <div className="d-block w-100" data-bs-interval="false"> <img src={Minesweeeper} alt="Minesweeper"/> </div> 
                <Carousel.Caption>
                  <h3>Minesweeeper</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <div className="d-block w-100" data-bs-interval="false"> <img src={Recipes} alt="Recipes"/> </div> 
                <Carousel.Caption>
                  <h3>Recipes</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <div className="d-block w-100" data-bs-interval="false"> <img src={WatchIt} alt="WatchIt"/> </div> 
                <Carousel.Caption>
                  <h3>WatchIt</h3>
                </Carousel.Caption>              
              </Carousel.Item>
              <Carousel.Item>
              <div className="d-block w-100" data-bs-interval="false"> <img src={Project4} alt="I Got There First"/> </div> 
                <Carousel.Caption>
                  <h3>I Got There First</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </main>
      <div className="break" id="projects-detail-break"></div>
       <main className="projects-detail-wrapper">
        <div className="projects-detail-container">
          <div className="project-detail-top">
          <div className="project-detail">
            <h2> I Got There First </h2>
            <h5> Week 11, Solo, 1 Week</h5>
            <h3> Placeholder for icons to readme, github and link</h3>
            <h5> Wins 🥇 </h5>
            <h5> asdfasdfsd </h5>
            <h5> Main Takeaway 🎓 </h5>
            <h5> New languages are nothing to be scared of. Now I've learnt the concepts, I can't wait to learn more!</h5>
          </div>
          <div className="project-detail">
            <h2> WatchIt </h2>
            <h5> Week 9, Group, 1 Week </h5>
            <h3> Placeholder for icons to readme, github and link</h3>
            <h5> Wins 🥇 </h5>
            <h5> This was my first time creating a back-end, and we used it to solve a pain point. </h5>
            <h5> Main Takeaway 🎓 </h5>
            <h5> I loved collaborating with others on this project. I did not love the consequences of editing when on the main branch 😫  </h5>
          </div>
          </div>
          <div className="project-detail-bottom">
          <div className="project-detail">
            <h2> Recipes </h2>
            <h5> Week 6, Group, 2 Days </h5>
            <h3> Placeholder for icons to readme, github and link</h3>
            <h5> Wins 🥇 </h5>
            <h5> Applied logic to dynamically display ingredients and embed YouTube videos.</h5>
            <h5> Main Takeaway 🎓 </h5>
            <h5> Just because a website is easy to use, does not mean it is easy to code. </h5>
          </div>
          <div className="project-detail">
            <h2> Minesweeeper </h2>
            <h5> Week 4, Solo, 1 Week </h5>
            <h3> Placeholder for icons to readme, github and link</h3>
            <h5> Wins 🥇 </h5>
            <h5> I added my stretch targets - A reset button, a timer, flags and difficulty levels. 
 </h5>
            <h5> Main Takeaway 🎓 </h5>
            <h5> Keep It Simple! </h5>
          </div>
          </div>
        </div>
      </main>
      <div className='break' id="skills-break"></div>
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
      <div className='break' id="interests-break"></div>
      <main className="interests-wrapper">
        <div className="interests-container">
          <h1 className="interests-title" > Interests </h1>
          <div className="interests-intro">
          <div className="interests-text">
            <h4> Food </h4>
            <h5> I am on a one man mission to find the best value, hidden gems across London. I have also worked on market stalls supporting start up confectionary business Artizan Fudge. </h5>
            <h4> Simpsons </h4>
            <h5> As a huge Simpsons fan, I ran a series of Simpsons themed pub quizzes for hundreds of attendees. This included finding a venue, marketing, selling tickets on eventbrite and writing the quiz! </h5>
            <h4> Podcasts </h4>
            <h5> In my previous job, long commutes led to a love of podcasts. In particular, I listen to current affairs and comedy ones. The show I am currently listening to is <a href="https://www.vox.com/land-of-the-giants-podcast" target="_blank" rel="noreferrer">Land of the Giants,</a> the story of how FAANG grew to be the companies they are today. </h5>
          </div>
          <div className="interests-images">
          <img src = {Fudge} alt = "Fudge"/>
          <img src = {Quiz} alt = "Quiz"/>
          </div>
          </div>
        </div>
      </main>
      <div className='break' id="contact-break"></div>
      <main className="contact-wrapper">
        <div className="contact-container">
          <h1 className="contact-title" > Come Say Hi ! </h1>
          <div className="contact-intro">
          <a href="https://www.linkedin.com/in/jrose117/" target="_blank" rel="noreferrer"> 
            <img src = {LinkedIn} alt = "LinkedIn"/>
          </a>
          <a href="https://github.com/JRose117/" target="_blank" rel="noreferrer"> 
            <img src = {GitHub} alt = "GitHub"/>
          </a>
          <a href="mailto:joerose3546@gmail.com?subject=Hi Joe!" target="_blank" rel="noreferrer">
            <img src = {EmailMe} alt = "Email Me"/>
          </a>
          </div>
        </div>
      </main>
    </>
  )
}

export default Homepage