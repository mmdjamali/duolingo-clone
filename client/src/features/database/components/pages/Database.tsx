import Preact from 'preact'
import DBNavbar from '../layout/Navbar'
import { 
    Routes,
    Route 
} from 'react-router'

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
                <div
                className={`
                flex
                -center
                `}>
                    <h1
                    className={`
                    text-[1.5rem]
                    font-bold
                    `}>
                        Languages
                    </h1>

                </div>
            </div>
        </div>

    </div>
  )
}

export default Database