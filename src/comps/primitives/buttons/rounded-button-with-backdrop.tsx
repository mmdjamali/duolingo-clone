import Preact from 'preact'
import { transforms } from '../../../constants/characters'

type colors = {
    bg : string,
    border : string,
    text : string
}

type props = {
    Icon : Preact.JSX.Element,
    colors : colors,
    idx : any,
    character : string,
    onClick?: (e: Preact.JSX.TargetedMouseEvent<HTMLDivElement>) => void
}

const roundedButtonWithBackdrop : Preact.FunctionComponent<props> = ({
    colors,
    idx,
    character,
    onClick,
    Icon
}) => {
    return(
        <div
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

                <div
                onClick={onClick}
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

                    {Icon}
                    
                </div>

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
    )
}

export default roundedButtonWithBackdrop