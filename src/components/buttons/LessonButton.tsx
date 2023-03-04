import Preact from 'preact'
import { MutableRef, useLayoutEffect, useRef, useState } from 'preact/hooks'
import {HiStar} from "react-icons/hi"
import Button from './Button'
import { FaCheck , FaLock } from "react-icons/fa"

type colors = {
    bg : string,
    border : string,
    text : string
}

type props = {
    colors : colors,
    isCurrent : boolean,
    isComplete : boolean,
    idx : any,
    character : string,
    onClick?: (c : MutableRef<HTMLDivElement | null>) => void
}

const LessonButton : Preact.FunctionComponent<props> = ({
    colors,
    isCurrent,
    isComplete,
    idx,
    character,
    onClick
}) => {
    const [show, setShow] = useState(false)
    const container = useRef<null | HTMLDivElement>(null)
    const transform = transforms[character]

    useLayoutEffect(() => {
        if(!isCurrent) return

        window.onbeforeunload = () => {
            if(container.current){
                container.current.scrollIntoView({
                    behavior: 'auto',
                    block: 'center',
                    inline: 'center'
                })
            }
        }

        window.onload = () => {
            if(container.current){
                container.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                    inline: 'center'
                })
            }
        }
    },[container])

  return (
    <div>
        <div
        ref={container}
        style={{
            transform : `translateX(${transform[idx]}px)`
        }}
        className={`
        z-[10]
        flex
        items-center
        justify-center
            ${isCurrent ? 
            `
            border-[8px]
            border-neutral-200
            p-1.5
            rounded-[100%]
            `
                : 
            ` 
            
            `
            }
        `}>
            <div
            className={`
            flex
            w-[70px]
            h-[65px]
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
                animate-up-and-down
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
                onClick={() => {
                    setShow(true)
                }}
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

                    { isComplete &&
                    <span
                    className={`
                    text-yellow-600
                    text-[1.5rem]
                    `}>
                        <FaCheck/>
                    </span>
                    }

                    { !isComplete && !isCurrent ?
                    <span
                    className={`
                    text-neutral-500
                    text-[1.5rem]
                    `}>
                        <FaLock/>
                    </span> :<></>
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

        </div>

        <div
        tabIndex={-1}
        onBlur={(e) => {
            setShow(false)
        }}
        ref={node => {
            if(show){
                node?.focus()
                setTimeout(() => {
                    node?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                        inline: 'center'
                    })
                },150)
                
            }
        }}
        className={`
        transition-all
        absolute
        right-[50%]
        translate-x-[50%]
        z-[15]
        ${show ? "scale-100" : "scale-0"}
        ${isComplete ?"bg-yellow-400" : 
            isCurrent ? colors.bg :
            "bg-neutral-300"
        }
        p-3
        rounded-2xl
        `}>
            <div
            className={`
            relative
            w-[min(350px,85vw)]
            flex
            flex-col
            `}>
                
                <div
                className={`
                w-[70px]
                flex
                items-center
                justify-center
                absolute
                right-[50%]
                bottom-[calc(100%)]
                `}
                style={{
                    transform : `translateX(calc(${50}% + ${transform[idx]}px)) translateY(-4px)`
                }}>
                    <span
                    className={`
                    inline
                    rotate-45
                    w-[12px]
                    h-[12px]
                    ${isComplete ?"bg-yellow-400" : 
                        isCurrent ? colors.bg :
                        "bg-neutral-300"
                    }  
                    `}
                    />
                </div>

                <div
                className={`
                flex
                flex-col
                pb-3
                gap-2
                `}>
                    <span
                    className={`
                    text-[19px]
                    font-medium
                    tracking-[1px]
                    ${isComplete ?"text-yellow-600" : 
                    isCurrent ? "text-white" :
                    "text-neutral-500/80"
                    }
                    `}>
                        Lorem ipsum dolor sit amet.
                    </span>

                    { isCurrent ? 
                    <span
                    className={`
                    text-[19px]
                    font-light
                    text-white
                    `}>
                        Lesson 1 of 4
                    </span> : <></>
                    }

                    { !isCurrent && !isComplete ? 
                    <span
                    className={`
                    text-[19px]
                    font-light
                    text-neutral-500/80
                    tracking-[1px]
                    `}>
                        Complete all levels above to unlock this!
                    </span> : <></>
                    }
                </div>

                <Button
                onMouseDown={e => e.preventDefault()}
                onFocus={e => {
                    e.stopPropagation()
                    setShow(true)
                }}
                disabled={isComplete ? false : isCurrent ? false : true }
                colors={`
                bg-white
                ${isComplete ?"text-yellow-400" : 
                    isCurrent ? colors.text :
                    "bg-neutral-300"
                }
                `}>
                    {isComplete ? 
                        `start +5xp` :
                        isCurrent ? 
                        `
                        start +10xp
                        ` 
                            :
                        `locked`
                    }
                </Button>

            </div>
        </div>
    </div>
  )
}

export default LessonButton

let transforms : {
    [name : string] : string[]
} = {
    "MmD" : [
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
    ],
    "Semih" : [
        "0",
        "-35",
        "-65",
        "-50",
        "0",
        "35",
        "50",
        "35",
        "5",
        "0",
    ],
    "King" : [
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
    ],
}