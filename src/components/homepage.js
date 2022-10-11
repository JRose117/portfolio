import Bootstrap from '../images/skills/Bootstrap.png';
import Cloudinary from '../images/skills/Cloudinary.png';
import CSS from '../images/skills/CSS3.png';
import Django from '../images/skills/Django.png';
import Excalidraw from '../images/skills/Excalidraw.png';
import Express from '../images/skills/Express.png';
import GitHub from '../images/skills/Github.png';
import Heroku from '../images/skills/Heroku.png';
import HTML5 from '../images/skills/HTML5.png';
import Insomnia from '../images/skills/Insomnia.png';
import JavaScript from '../images/skills/JavaScript.png';
import JSON from '../images/skills/JSON.png';
import MongoDB from '../images/skills/MongoDB.png';
import Mongoose from '../images/skills/Mongoose.png';
import Netlify from '../images/skills/Netlify.png';
import Nodejs from '../images/skills/Nodejs.png';
import Nodemon from '../images/skills/Nodemon.png';
import npm from '../images/skills/npm.png';
import Postgresql from '../images/skills/Postgresql.png';
import Python from '../images/skills/Python.png';
import ReactIcon from '../images/skills/reactlogo.png';
import SASS from '../images/skills/SASS.png';
import Slack from '../images/skills/Slack.png';
import TablePlus from '../images/skills/TablePlus.png';
import Trello from '../images/skills/Trello.png';
import VSCode from '../images/skills/VSCode.png';
import Yarn from '../images/skills/Yarn.png';
// import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import Me from '../images/Me.jpeg';
import Minesweeeper from '../images/projects/minesweeper.gif';
import Recipes from '../images/projects/recipes.gif';
import WatchIt from '../images/projects/watchit.gif';
import Project4 from '../images/projects/project4.gif';
import Chain from '../images/projects/Chain.png'
import LinkedIn from '../images/contact/LinkedIn.png';
import EmailMe from '../images/contact/EmailMe.png';
import Fudge from '../images/interests/Fudge.png';
import Quiz from '../images/interests/Quiz.png';
import 'bootstrap/dist/css/bootstrap.css';

const images = [
  {
    name: "Bootstrap",
    imageSrc: Bootstrap,
  },
  {
    name: "Cloudinary",
    imageSrc: Cloudinary,
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
    name: "Excalidraw",
    imageSrc: Excalidraw,
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
    name: "JSON Web Token",
    imageSrc: JSON,
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
    name: "Nodemon",
    imageSrc: Nodemon,
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
    name: "Slack",
    imageSrc: Slack,
  },
  {
    name: "TablePlus",
    imageSrc: TablePlus,
  },
  {
    name: "Trello",
    imageSrc: Trello,
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
            <img src = {Me} alt = "Joe"/>
            <h5>When I was 21 years old, in my first year out of University, I took part in the intensive <span className="about-bold">Teach First</span> Programme. The programme places graduates, with minimal training, into the countries’ most challenging schools. Through hard work, determination and by quickly implementing all feedback given to me, I developed a valued skill of which I am incredibly proud. As a Maths teacher I achieved incredible grades for my students and have since held <span className="about-bold">leadership</span> positions in school. <br></br><br></br>I have recently completed the <span className="about-bold">General Assembly Boot Camp,</span> where the same hard work, perseverance and adaptability was needed. Over the 3 month programme, I completed four projects, covering <span className="about-bold">HTML, CSS, JavaScript, MERN and Python/ Django.</span> Throughout the course, I enjoyed the challenge of learning something totally new every day and having to adapt what I had just learnt to complete unfamiliar tasks. I am at the beginning of my journey as a software developer and so I am incredibly keen to keep learning and keep growing my skill set.  
</h5>
          </div>
        </div>
      </main>
      <div className="break" id="project4-break"></div>
      <main className="projecta-detail-wrapper">
        <div className="projecta-detail-container">
            <div className="project-single-direction-a">
              <div className="project-single-left-1">
                <h2> Project 4 - I Got There First </h2>
                <div className="deployment-links">
                  <a href="https://i-got-there-first.herokuapp.com/" target="_blank" rel="noreferrer"> 
                    <img className="deployment" src = {Chain} alt="Link to Website"/>
                  </a>
                  <a href="https://github.com/JRose117/sei-project-4" target="_blank" rel="noreferrer"> 
                    <img className="deployment" src = {GitHub} alt="Link to GitHub"/>
                  </a>
                </div>
                <h5> Week 11, Solo, 1 Week</h5>
                <div className="project-image"><img src={Project4} alt="Project4"/></div>
              </div>
              <div className="project-single-right">
              <div className ="tech-used">
                <img src={Django} alt="Django"/>
                <img src={Cloudinary} alt="Cloudinary"/>
                <img src={Python} alt="Python"/>
                <img src={HTML5} alt="HTML"/>
                <img src={JavaScript} alt="JavaScript"/>
                <img src={CSS} alt="CSS"/>
                <img src={GitHub} alt="GitHub"/>
                <img src={SASS} alt="SASS"/>
                <img src={ReactIcon} alt="React"/>
                <img src={Bootstrap} alt="Bootstrap"/>
                <img src={Excalidraw} alt="Excalidraw"/>
                <img src={TablePlus} alt="TablePlus"/>
                <img src={Insomnia} alt="Insomnia"/>
                <img src={Heroku} alt="Heroku"/>
                <img src={Netlify} alt="Netlify"/>
              </div>
              <div className="project-reflections">
                <h5> Wins 🥇 </h5>
                <h6> I got to play around and experiment a lot. </h6>
                <h5> Main Takeaway 🎓 </h5>
                <h6> New languages are nothing to be scared of. Now I've learnt the concepts, I can't wait to learn more!</h6>
            </div>
            </div>
            </div>
        </div>
        </main>
      <div className="break" id="project3-break"></div>
      <main className="projectb-detail-wrapper">
        <div className="projectb-detail-container">
            <div className="project-single-direction-b">
              <div className="project-single-left-1">
                <h2> Project 3 - WatchIt </h2> 
                <div className="deployment-links">
                  <a href="https://sei-project3-moviematch.netlify.app/" target="_blank" rel="noreferrer"> 
                    <img className="deployment" src = {Chain} alt="Link to Website"/>
                  </a>
                  <a href="https://github.com/JRose117/" target="_blank" rel="noreferrer"> 
                    <img className="deployment" src = {GitHub} alt="Link to GitHub"/>
                  </a>
                </div>
                <h5> Week 9, Group, 1 Week </h5>
                <div className="project-image"><img src={WatchIt} alt="WatchIt"/></div>
              </div>
              <div className="project-single-right">
              <div className ="tech-used">
                <img src={Nodejs} alt="Nodejs"/>
                <img src={MongoDB} alt="MongoDB"/>
                <img src={Express} alt="HTML"/>
                <img src={Mongoose} alt="Mongoose"/>
                <img src={CSS} alt="CSS"/>
                <img src={SASS} alt="SASS"/>
                <img src={ReactIcon} alt="React"/>
                <img src={Bootstrap} alt="Bootstrap"/>
                <img src={Excalidraw} alt="Excalidraw"/>
                <img src={VSCode} alt="VSCode"/>
                <img src={GitHub} alt="GitHub"/>
                <img src={Heroku} alt="Heroku"/>
                <img src={Trello} alt="Trello"/>
                <img src={Nodemon} alt="Nodemon"/>
                <img src={JSON} alt="JSON Web Token"/>
                <img src={Netlify} alt="Netlify"/>
                <img src={Insomnia} alt="Insomnia"/>
              </div>
              <div className="project-reflections">
                <div className="project-reflections">
                  <h5> Wins 🥇 </h5>
                  <h6> This was my first time creating a back-end, and we used it to solve a pain point. </h6>
                  <h5> Main Takeaway 🎓 </h5>
                  <h6> I loved collaborating with others on this project... I did not love the consequences of editing when on the main branch 😫</h6>
              </div>
              </div>
            </div>
            </div>
        </div>
        </main>
      <div className="break" id="project2-break"></div>
      <main className="projecta-detail-wrapper">
        <div className="projecta-detail-container">
            <div className="project-single-direction-a">
              <div className="project-single-left-1">
                <h2> Project 2 - Recipes </h2>
                <div className="deployment-links">
                  <a href="https://react-recipe-app-2-day-project.netlify.app/" target="_blank" rel="noreferrer"> 
                    <img className="deployment" src = {Chain} alt="Link to Website"/>
                  </a>
                  <a href="https://github.com/JRose117/SEI-Project-2" target="_blank" rel="noreferrer"> 
                    <img className="deployment" src = {GitHub} alt="Link to GitHub"/>
                  </a>
                </div>
                <h5> Week 6, Group , 2 Days</h5>
                <div className="project-image"><img src={Recipes} alt="Recipes"/></div>
              </div>
              <div className="project-single-right">
              <div className ="tech-used">
                <img src={JavaScript} alt="JavaScript"/>
                <img src={HTML5} alt="HTML"/>
                <img src={CSS} alt="CSS"/>
                <img src={SASS} alt="SASS"/>
                <img src={ReactIcon} alt="React"/>
                <img src={Bootstrap} alt="Bootstrap"/>
                <img src={Excalidraw} alt="Excalidraw"/>
                <img src={Heroku} alt="Heroku"/>
                <img src={GitHub} alt="GitHub"/>
                <img src={Netlify} alt="Netlify"/>
                <img src={Insomnia} alt="Insomnia"/>
                <img src={VSCode} alt="VSCode"/>
              </div>
              <div className="project-reflections">
                <h5> Wins 🥇 </h5>
                <h6> Applied logic to dynamically display ingredients and embed YouTube videos. </h6>
                <h5> Main Takeaway 🎓 </h5>
                <h6> Just because a website is easy to use, does not mean it is easy to code.</h6>
            </div>
            </div>
            </div>
        </div>
        </main>
        <div className="break" id="project1-break"></div>
      <main className="projectb-detail-wrapper">
        <div className="projectb-detail-container">
            <div className="project-single-direction-b">
              <div className="project-single-left-1">
                <h2> Project 1 - Minesweeper </h2>
                <div className="deployment-links">
                  <a href="https://jrose117.github.io/project1/" target="_blank" rel="noreferrer"> 
                    <img className="deployment" src = {Chain} alt="Link to Website"/>
                  </a>
                  <a href="https://github.com/JRose117/project1" target="_blank" rel="noreferrer"> 
                    <img className="deployment" src = {GitHub} alt="Link to GitHub"/>
                  </a>
                </div>
                <h5> Week 4, Solo, 1 Week</h5>
                <div className="project-image"><img src={Minesweeeper} alt="Minesweeeper"/></div>
              </div>
              <div className="project-single-right">
              <div className ="tech-used">
                <img src={JavaScript} alt="JavaScript"/>
                <img src={HTML5} alt="HTML5"/>
                <img src={CSS} alt="CSS"/>
                <img src={Excalidraw} alt="Excalidraw"/>
                <img src={GitHub} alt="GitHub"/>
              </div>
              <div className="project-reflections">
                <h5> Wins 🥇 </h5>
                <h6> I added my stretch targets - A reset button, a timer, flags and difficulty levels. </h6>
                <h5> Main Takeaway 🎓 </h5>
                <h6> Keep it Simple! </h6>
            </div>
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
            <h4> Food 🍲 </h4>
            <h5> I am on a one man mission to find the best value, hidden gems across London. I have also worked on market stalls supporting start up confectionary business Artizan Fudge. </h5>
            <h4> Simpsons 📺 </h4>
            <h5> As a huge Simpsons fan, I ran a series of Simpsons themed pub quizzes for hundreds of attendees. This included finding a venue, marketing, selling tickets on eventbrite and writing the quiz! </h5>
            <h4> Podcasts 🎧 </h4>
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
          <h1 className="contact-title" > Come Say Hi! </h1>
          <div className="contact-intro">
          <a href="https://www.linkedin.com/in/jrose117/" target="_blank" rel="noreferrer"> 
            <div className = 'contact-image'><img src = {LinkedIn} alt = "LinkedIn"/></div>
          </a>
          <a href="https://github.com/JRose117/" target="_blank" rel="noreferrer"> 
            <div className = 'contact-image'><img src = {GitHub} alt = "GitHub"/></div>
          </a>
          <a href="mailto:joerose3546@gmail.com?subject=Hi Joe!" target="_blank" rel="noreferrer">
            <div className = 'contact-image'><img src = {EmailMe} alt = "Email Me"/></div>
          </a>
          </div>
        </div>
      </main>
    </>
  )
}

export default Homepage