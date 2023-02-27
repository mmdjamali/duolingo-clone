import Preact from 'preact'
import { useRef, useState } from 'preact/hooks'
import { speak } from '../../utils/sounds'

type props = {
    value : string,
    meaning : string,
}

const TextWithHint :Preact.FunctionComponent<props> = ({
    value,
    meaning
}) => {
    const [showMeaning , setShowMeaning] = useState<boolean>(false)

    return (
    <div
    onMouseEnter={() => {
        // setShowMeaning(true)
    }}

    onMouseLeave={() => {
        setShowMeaning(false)
    }}

    className={`
    relative
    border-dashed
    border-b-[1px]
    border-b-neutral-300
    `}>
        {value}

        { showMeaning &&
        <span
        className={`
        rounded-[14px]
        py-3
        px-2
        text-[1rem]
        absolute
        bg-neutral-100
        border-[2px]
        top-[calc(100%_+_5px)]
        right-[50%]
        translate-x-[50%]
        `}>
            {meaning}
        </span>
        }

        { showMeaning && 
        <span
        className={`
        absolute
        inline
        w-[12px]
        h-[12px]
        bg-neutral-100
        border-t-[2px]
        border-l-[2px]
        right-[50%]
        translate-x-[50%]
        rotate-45
        top-[100%]
        `}/>
        }

    </div>
  )
}

export default TextWithHint