import { useState } from 'preact/hooks'
import Lesson from './features/learn/components/pages/Lesson'
import { Router } from "preact-router"
import Learn from './features/learn/components/pages/Learn'
import Database from './features/database/components/pages/Database'

export function App() {
  return (
    <div
    className="
    flex
    w-full
    min-h-screen
    justify-center
    ">
      <Router>

        <Learn path="/learn" />

        <Lesson path="/lesson"/>

        <Database path="/database/languages"/>
        <Database path="/database/users"/>

      </Router>
      
    </div>
  )
}
