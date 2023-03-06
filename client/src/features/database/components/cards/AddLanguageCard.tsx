import Preact from 'preact'
import { BsPlusLg } from "react-icons/bs";

type props = {
    flag : any,
    language : string,
}

const AddLanguageCard : Preact.FunctionComponent<props> = ({
    flag,
    language,
}) => {
  return (
    <div
    className={`
    flex
    flex-col
    items-center
    p-3
    py-5
    gap-2
    border-[2px]
    border-b-[4px]
    rounded-2xl
    bg-white 
    sm:hover:bg-blue-50
    border-blue-300
    cursor-pointer
    `}>
        <span
        className={`
        flex
        justify-center
        items-center
        text-[1.5rem]
        text-blue-400
        mt-6
        border-blue-400
        border-[3px]
        w-[75px]
        h-[55px]
        rounded-xl
        `}
        >
            <BsPlusLg/>
        </span>

        <p
        className={`
        text-[17px]
        font-medium
        text-blue-400
        `}>
            {language}
        </p>
    </div>
  )
}

export default AddLanguageCard