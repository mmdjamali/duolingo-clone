import { useState } from 'preact/hooks'
import Lesson from './comps/pages/lesson'
import Learn from './comps/pages/Learn'
import Database from './comps/pages/database/index'
import { 
  BrowserRouter as Router,
  Routes,
  Route 
} from 'react-router-dom'
import Navbar from './comps/layouts/navbar'
import ShowNavbar from './comps/layouts/show-navbar'

export function App() {
  return (
    <div
    className="
    flex
    w-full
    min-h-screen
    justify-center
    overflow-y-[auto]
    h-fit
    relative
    ">


      <Router>
      <ShowNavbar/>
        <Routes>

          <Route path='/learn' element={<Learn/>}/>
          <Route path='/lesson' element={<Lesson/>}/>
          <Route path='/database/*' element={<Database/>}/>

        </Routes>
      </Router>
      
    </div>
  )
}
