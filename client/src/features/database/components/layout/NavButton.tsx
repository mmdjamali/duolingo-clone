import Preact from 'preact'
import { IconType } from 'react-icons/lib'

type props = {
    Icon : IconType,
    title : string,
    url : string,
    selected : boolean
}

const NavButton :Preact.FunctionComponent<props> = ({
    Icon,
    title,
    url,
    selected
}) => {
  return (
    <a
    href={url}>
        <div
        className={`
        cursor-pointer
        min-w-[222px]
        flex
        items-center
        gap-5
        px-3
        py-2
        rounded-xl
        border-[2px]
        ${selected ? "border-blue-400 bg-blue-100" : "border-transparent bg-white sm:hover:bg-neutral-100"}
        `}>
            <span
            className={`
            text-[2rem]
            ${selected ? "text-blue-400" : "text-neutral-700"}
            `}>
                {<Icon/>}
            </span>

            <span
            className={`
            text-[14px]
            font-medium
            tracking-[1px]
            uppercase
            ${selected ? "text-blue-400" : "text-neutral-700"}
            `}>
                {title}
            </span>
        </div>
    </a>
  )
}

export default NavButton
