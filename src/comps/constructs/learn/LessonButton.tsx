import Preact from 'preact'
import { MutableRef, useEffect, useRef, useState } from 'preact/hooks'
import { transforms } from '../../../utils/characters'
import Button from '../../../components/buttons/Button'
import RoundedButton from '../../primitives/buttons/rounded-button-with-backdrop'
import { FaCheck , FaLock } from "react-icons/fa"
import { HiStar } from 'react-icons/hi'

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

    useEffect(() => {
        if(!isCurrent) return

        // window.onbeforeunload = () => {
        //     if(container.current){
        //         container.current.scrollIntoView({
        //             behavior: 'auto',
        //             block: 'center',
        //             inline: 'center'
        //         })
        //     }
        // }

        // window.onload = () => {
            if(container.current){
                container.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                    inline: 'center'
                })
            }
        // }
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

                <RoundedButton
                onClick={() => {
                    setShow(true)
                }}
                character={character}
                Icon={(() => {
                    if(isCurrent) return(
                        <HiStar/>
                    )

                    if(isComplete) return(
                        <span
                        className={`
                        text-yellow-600
                        text-[1.5rem]
                        `}>
                            <FaCheck/>
                        </span>
                    )
                    
                    return (
                        <span
                        className={`
                        text-neutral-500
                        text-[1.5rem]
                        `}>
                            <FaLock/>
                        </span>
                    )
                })()}
                colors={{
                    bg : isComplete ?"bg-yellow-400" : isCurrent ? colors.bg : "bg-neutral-300",
                    border : isComplete ?"bg-yellow-500" : isCurrent ? colors.border :"bg-neutral-400",
                    text : ""
                }}
                idx={idx}
                />
                
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
        outline-none
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