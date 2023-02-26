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
    const timer = useRef<null>(null)
  return (
    <div
    onMouseEnter={() => {
        setShowMeaning(true)
        speak(meaning,"en-US")
    }}

    onMouseLeave={() => {
        setShowMeaning(false)
    }}

    className={`
    relative
    border-dashed
    border-b-[1px]
    border-b-neutral-600
    `}>
        {value}

        { showMeaning &&
        <span
        className={`
        rounded-2xl
        py-3
        px-2
        text-[1rem]
        absolute
        bg-neutral-100
        border-[2px]
        top-[calc(100%_+_6px)]
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