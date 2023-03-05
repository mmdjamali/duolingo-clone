import { useState } from 'preact/hooks'
import Lesson from './client/features/learn/components/pages/Lesson'
import Router from "preact-router"
import Learn from './client/features/learn/components/pages/Learn'

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

      </Router>
      
    </div>
  )
}
