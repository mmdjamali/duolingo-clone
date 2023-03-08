import Preact from 'preact'
import { flags } from '../../../../utils/Flags'
import { useState } from 'preact/hooks'
import {MdKeyboardArrowDown} from "react-icons/md"

type props = {
    value : string,
    setValue : (data : any | null) => void,
}

const SelectLessonType : Preact.FunctionComponent<props> = ({
    setValue,
    value
}) => {
    const [showOptions , setShowOptions] = useState<boolean>(false)
    
    return (
    <div
    className={`
    flex
    items-center
    px-[10px]
    py-[8px]
    font-light
    text-[19px]
    bg-neutral-100
    border-[2px]
    rounded-2xl
    w-full
    gap-2.5
    `}>
        <div>
            {value}
        </div>

        <div
        className={`
        relative
        flex
        `}>

            <div
            className={`
            transition-all
            duration-200
            select-none
            absolute
            flex
            flex-col
            top-[100%]
            bg-neutral-100
            rounded-xl
            overflow-x-hidden
            overflow-y-auto
            `}>

            </div>
        </div>
    </div>
  )
}

export default SelectLessonType