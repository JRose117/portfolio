// import About from './components/about'
// import Contact from './components/contact'
import Homepage from './components/homepage'
import PageNavbar from './components/pagenavbar'
import Projects from './components/projects'
// import Skills from './components/skills'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <div className="site-wrapper">
        <BrowserRouter>
          <PageNavbar/>
          <Routes>
            <Route path="/" element={<Homepage/>}></Route>
            <Route path="/Projects" element={<Projects/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
