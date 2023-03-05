import Preact from 'preact'
import { useState , useRef , useLayoutEffect} from 'preact/hooks'

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
        setShowMeaning(true)
    }}

    onMouseLeave={() => {
        setShowMeaning(false)
    }}

    className={`
    break-all
    relative
    border-dashed
    border-b-[1px]
    border-b-neutral-300
    `}>
        {value}

        { showMeaning &&
        <span
        className={`
        whitespace-nowrap
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
        z-[10]
        `}>
            {meaning}
        </span>
        }

        { showMeaning && 
        <span
        className={`
        z-[11]
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