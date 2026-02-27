import {BrowserRouter, Routes, Route} from 'react-router-dom'
import "./assets/style.css"
import Home from './Pages/Home'
import Groups from './Pages/Group.jsx'
import Project from './Pages/Project.jsx'
import NoPage from './Pages/NoPage.jsx'


function App() {
  return ( <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/group' element={<Groups />} />
        <Route path='/project/:id' element={<Project />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </> )
}

export default App
