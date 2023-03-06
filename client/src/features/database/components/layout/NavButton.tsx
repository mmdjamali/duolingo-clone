import Preact from 'preact'
import { IconType } from 'react-icons/lib'
import { Link } from 'react-router-dom'

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
    <Link
    to={url}>
        <div
        className={`
        cursor-pointer
        w-fit
        xl:min-w-[222px]
        flex
        items-center
        gap-3
        px-2.5
        py-2
        rounded-xl
        border-[2px]
        ${selected ? "border-blue-400 bg-blue-50" : "border-transparent bg-white sm:hover:bg-neutral-100"}
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
            hidden
            xl:inline
            text-[16px]
            font-medium
            tracking-[1px]
            uppercase
            ${selected ? "text-blue-400" : "text-neutral-700"}
            `}>
                {title}
            </span>
        </div>
    </Link>
  )
}

export default NavButton
