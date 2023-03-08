import Preact from 'preact'
import { MutableRef, useLayoutEffect, useRef, useState } from 'preact/hooks'
import {HiStar} from "react-icons/hi"
import { FaCheck , FaLock } from "react-icons/fa"
import { transforms } from '../../../../utils/characters'
import { Link } from 'react-router-dom'

type colors = {
    bg : string,
    border : string,
    text : string
}

type props = {
    colors : colors,
    idx : any,
    character : string,
    onClick?: (c : MutableRef<HTMLDivElement | null>) => void
}

const LessonButtonDB : Preact.FunctionComponent<props> = ({
    colors,
    idx,
    character,
    onClick
}) => {
    const container = useRef<null | HTMLDivElement>(null)
    const transform = transforms[character] ?? transforms["blank"]

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
        `}>
            <div
            className={`
            flex
            w-[70px]
            h-[65px]
            relative
            `}>

                <Link
                to={`${idx}`}
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
                ${colors?.bg}
                z-[10]
                -translate-y-[0px]
                active:translate-y-[8px]
                `}>

                    <span
                    className={`
                    text-white
                    text-[1.5rem]
                    `}>
                        <FaCheck/>
                    </span>
                    
                </Link>

                <span
                className={`
                bottom-0
                flex
                absolute
                h-[57px]
                w-[70px]
                rounded-[100%]
                ${colors.border}
                z-[8]
                `}/>
                
            </div>

        </div>
    </div>
  )
}

export default LessonButtonDB