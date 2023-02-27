import { useState } from 'preact/hooks'
import Challenge from './components/challenges/TranslateWithButtons'
import Lesson from './pages/Lesson'

export function App() {
  return (
    <div
    className="
    flex
    w-full
    min-h-screen
    justify-center
    ">
      <Lesson/>
    </div>
  )
}
