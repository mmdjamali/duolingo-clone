import Preact from 'preact'
import { IconType } from 'react-icons/lib'
import { Link } from 'react-router-dom'

type props = {
    Icon : Preact.FunctionComponent<{className : string}>,
    title : string,
    url : string,
    selected : boolean
}

export default ({
    Icon,
    title,
    url,
    selected
} : props) => {
  return (
    <Link
    to={url}>
        <div
        className={`
        flex-shrink-0
        cursor-pointer
        w-fit
        xl:min-w-[222px]
        flex
        items-center
        gap-4
        px-4
        py-2
        rounded-xl
        border-[2px]
        ${selected ? "border-cyan-400 bg-cyan-50" : "border-transparent bg-white sm:hover:bg-neutral-100"}
        `}>
            <Icon
            className={`
            min-w-[32px]
            w-[32px]
            aspect-square
            flex-shrink-0
            `}
            />

            <span
            className={`
            hidden
            xl:inline
            text-[16px]
            font-medium
            tracking-[1px]
            uppercase
            ${selected ? "text-cyan-400" : "text-neutral-700"}
            `}>
                {title}
            </span>
        </div>
    </Link>
  )
}
