import Preact from 'preact'
import DBNavbar from '../layout/DBNavbar'
import Courses from './Courses'
import { Route, Routes } from 'react-router'
import Users from './Users'

type props = {
    path? : string
}

const Database : Preact.FunctionComponent<props> = () => {
  return (
    <div
    className={`
    flex
    w-full
    h-screen
    `}>

        <DBNavbar/>

        <div
        className={`
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
                
                <Route path="/users" element={<Users/>}/>

              </Routes>
            </div>
        </div>

    </div>
  )
}

export default Database