import { useState } from 'preact/hooks'
import Lesson from './features/learn/components/pages/Lesson'
import {  } from "preact-router"
import Learn from './features/learn/components/pages/Learn'
import Database from './features/database/components/pages/Database'
import { 
  BrowserRouter as Router,
  Routes,
  Route 
} from 'react-router-dom'

export function App() {
  return (
    <div
    className="
    flex
    w-full
    min-h-screen
    max-h-screen
    justify-center
    overflow-y-[auto]
    ">
      <Router>
        <Routes>

          <Route path='/learn' element={<Learn/>}/>
          <Route path='/lesson' element={<Lesson/>}/>
          <Route path='/database/*' element={<Database/>}/>

        </Routes>
      </Router>
      
    </div>
  )
}
