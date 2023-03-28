import Navbar from '../../layouts/database-side-navbar'
import Courses from './courses'
import { Route, Routes } from 'react-router'
import Users from './users'
import Course from './course'

type props = {
    path? : string
}

export default ({

} : props) => {
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

        <Navbar/>

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
