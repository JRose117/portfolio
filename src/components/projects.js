import Minesweeeper from '../images/minesweeper.png'

const Projects = () => {
  return (
    <main className="project-single-wrapper">
      <div className="project-single-container-left">
        <h1> Minesweeper</h1>
        <img src={Minesweeeper} alt="Minesweeper"/>
        <h4> Our Brief was to create a grid based game. I chose Minesweeper because it was the most difficult option available. 
 </h4>
      </div>
      <div className="project-single-container-right">
        <h3> Week 4, 1 Week, Solo Project </h3>
        <h3> https://jrose117.github.io/project1/ </h3>
        <h3> Read me</h3>
        <h2> Wins </h2>
        <h4> The game works! I added my stretch targets - A reset button, a timer, flags and difficulty levels. </h4> 
        <h2> What I learnt </h2>
        <h4> Keep it simple! I understood my code as I wrote it, but then there was so much of it that I’d lose track of what I had done. This meant I would end up repeating code and it made it really difficult to explain any problems I had as I went along. </h4>
      </div>
    </main>
  )
}

export default Projects