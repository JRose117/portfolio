// import About from './components/about'
// import Contact from './components/contact'
import Homepage from './components/homepage'
import PageNavbar from './components/pagenavbar'
// import Skills from './components/skills'
import Project1 from './components/project1'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound'
// import PageFooter from './components/PageFooter'

const App = () => {
  return (
    <>
      <div className="site-wrapper">
        <BrowserRouter>
          <PageNavbar/>
          <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path='*' element={<NotFound/>}/>
            <Route path="/a" element={<Project1/>}/>
          </Routes>
          {/* <PageFooter/> */}
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
