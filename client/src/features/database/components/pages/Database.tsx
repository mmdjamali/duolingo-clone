import Preact from 'preact'
import DBNavbar from '../layout/DBNavbar'
import Courses from './Courses'
import { Route, Routes } from 'react-router'
import Users from './Users'
import Course from './Course'

type props = {
    path? : string
}

const Database : Preact.FunctionComponent<props> = () => {
  return (
    <div
    className={`
    relative
    flex
    w-full
    min-h-screen
    max-h-screen
    overflow-y-auto
    `}>

        <DBNavbar/>

        <div
        className={`
        h-fit
        min-h-screen
        w-full
        px-[66px]
        py-8
        text-neutral-600
        `}>
            <div
            className={`
            flex
            flex-col
            w-full
            min-h-full
            gap-6
            `}>
              <Routes>

                <Route path="/courses" element={<Courses/>}/>
                <Route path="/courses/:id/*" element={<Course/>}/>
                
                <Route path="/users" element={<Users/>}/>

              </Routes>
            </div>
        </div>

    </div>
  )
}

export default Database