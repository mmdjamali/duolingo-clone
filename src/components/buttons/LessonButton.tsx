import Preact from 'preact'
import {HiStar} from "react-icons/hi"


type colors = {
    bg : string,
    border : string,
    text : string
}

type props = {
    colors : colors,
    isCurrent : boolean,
    isComplete : boolean,
    idx : any
}

const LessonButton : Preact.FunctionComponent<props> = ({
    colors,
    isCurrent,
    isComplete,
    idx
}) => {
  return (
    <div
    ref={(node) => {
        if(!isCurrent) return

        if(node){
            node.scrollIntoView()
        }
    }}
    style={{
        transform : `translateX(${transforms[idx]}px)`
    }}
    className={`
    ${isCurrent ? 
    `
    border-[8px]
    border-neutral-200
    p-1.5
    rounded-[100%]
    `
        : 
    ""}
    `}>
        <div
        className={`
        flex
        min-w-[70px]
        min-h-[65px]
        relative
        `}>

            {isCurrent &&
            <div
            className={`
            flex
            flex-col
            items-center
            justify-center
            absolute
            right-[50%]
            translate-x-[50%]
            bottom-[calc(100%)]
            z-[11]
            `}>
                <div
                className={`
                translate-y-[9px]
                rounded-lg
                bg-white
                uppercase
                z-[11]
                font-bold
                py-2.5
                px-3
                border-[2px]
                tracking-[1px]
                ${colors.text}
                `}>
                    Start
                </div>

                <span
                className={`
                w-[14px]
                h-[14px]
                rotate-45
                bg-white
                border-[2px]
                border-t-white
                border-l-white
                z-[11]
                `}/>
            </div>
            }

            <button
            className={`
            cursor-pointer
            flex
            items-center
            justify-center
            text-[2rem]
            text-white
            h-[57px]
            w-[70px]
            rounded-[100%]
            ${isComplete ?"bg-yellow-400" : 
                isCurrent ? colors.bg :
                "bg-neutral-300"
            }
            z-[10]
            -translate-y-[0px]
            active:translate-y-[8px]
            `}>
                { isCurrent &&
                    <HiStar/>
                }
            </button>

            <span
            className={`
            bottom-0
            flex
            absolute
            h-[57px]
            w-[70px]
            rounded-[100%]
            ${isComplete ?"bg-yellow-500" : 
                isCurrent ? colors.border :
                "bg-neutral-400"
            }
            z-[8]
            `}/>
            
        </div>

        <div
        className={`
        
        `}>

        </div>
    </div>
  )
}

export default LessonButton

let transforms = [
    "0",
    "35",
    "65",
    "50",
    "0",
    "-35",
    "-50",
    "-35",
    "-5",
    "0",
]