import Project4 from '../images/projects/project4.png'
import Django from '../images/skills/Django.png'
import Python from '../images/skills/Python.png'
import TablePlus from '../images/skills/TablePlus.png'
import HTML from '../images/skills/HTML5.png'
import JavaScript from '../images/skills/JavaScript.png'
import CSS from '../images/skills/CSS3.png'
import SASS from '../images/skills/SASS.png'
import reactlogo from '../images/skills/reactlogo.png'
import Bootstrap from '../images/skills/Bootstrap.png'
import Excalidraw from '../images/skills/Excalidraw.png'

const Project1 = () => {

  return (
    <div className="main">
      <div className="project-single-all">
          <div className="project-single-left">
            <div className="project-single-left-1">
              <h2> I Got There First </h2>
              <h5> Week 11, Solo, 1 Week</h5>
              <img src={Project4} alt="project4"/>
            </div>
            <div className="project-single-right">
            <div className ="tech-used">
              <img src={Django} alt="Django"/>
              <img src={Python} alt="Python"/>
              <img src={HTML} alt="HTML"/>
              <img src={JavaScript} alt="JavaScript"/>
              <img src={CSS} alt="CSS"/>
              <img src={SASS} alt="SASS"/>
              <img src={reactlogo} alt="React"/>
              <img src={Bootstrap} alt="Bootstrap"/>
              <img src={Excalidraw} alt="Excalidraw"/>
              <img src={TablePlus} alt="TablePlus"/>
            </div>
            <h5> Wins 🥇 </h5>
            <h5> I got to play around and experiment a lot. </h5>
            <h5> Main Takeaway 🎓 </h5>
            <h5> New languages are nothing to be scared of. Now I've learnt the concepts, I can't wait to learn more!</h5>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Project1