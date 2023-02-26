import { useState } from 'preact/hooks'
import Challenge from './components/challenges/Challenge'

export function App() {
  return (
    <div
    className="
    flex
    w-full
    min-h-screen
    justify-center
    ">
      <Challenge/>
    </div>
  )
}
