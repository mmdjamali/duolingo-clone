import Preact from 'preact'
import { useState } from 'preact/hooks'

type props = {
    children : Preact.ComponentChildren,
    outlined ? : boolean,
    colors ? : string
    onClick ?: (e : Preact.JSX.TargetedMouseEvent<HTMLButtonElement>) => {} | Promise<void>,
    brightness ?: string
    disabled ?: boolean
}

const Button :Preact.FunctionComponent<props> = ({
    children,
    outlined,
    colors,
    onClick,
    brightness,
    disabled
}) => {
    const [loading , setLoading] = useState<boolean>(false)
  
    return (
    <div
    className={`
    w-full
    relative
    grid
    items-end
    h-[50px]
    `}>
        <button
        onClick={async (e) => {
            if(!onClick || disabled) return

            try{
                setLoading(true)
                await onClick(e)
                setLoading(false)
            }
            catch(err){
                console.log(err)
                setLoading(false)
            }
        }}
        className={`
        flex
        items-center
        justify-center
        flex-shrink-0
        rounded-2xl
        transition-all
        duration-75
        ${outlined ? "border-[2px] active:border-b-[2px]" : "active:border-b-[0]"}
        min-w-[150px]
        uppercase
        text-[1rem]
        font-bold
        tracking-[2px]
        py-2.5
        px-4
        ${(loading || disabled) ? "" : "border-b-[4px]"}
        ${disabled ? "pointer-events-none" : ""}
        ${disabled ? 
            `
            text-white
            border-neutral-500
            bg-neutral-400
            ` 
            : 
            colors ? 
                colors
                :
                `
                text-white
                border-green-600
                bg-green-500
                `
        }
        `}>
            {!loading ? children :
            <img 
            className={`
            h-[24px]
            scale-[40%]
            ${brightness}
            `}
            src="/three-dots.svg"/>}
            
        </button>
    </div>
  )
}

export default Button