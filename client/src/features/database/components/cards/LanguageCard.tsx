import Preact from 'preact'
import { Link } from 'react-router-dom'
import {MdOutlineModeEditOutline} from "react-icons/md";

type props = {
    flag : any,
    language : string,
    learners : number
}

let formatter = new Intl.NumberFormat("en",{
  notation : "compact"
})

const LanguageCard : Preact.FunctionComponent<props> = ({
    flag,
    language,
    learners
}) => {
  return (
    <Link
    to="">
      <div
      className={`
      relative
      select-none
      flex
      flex-col
      items-center
      p-3
      py-6
      gap-2
      border-[2px]
      border-b-[4px]
      rounded-2xl
      bg-white sm:hover:bg-neutral-100
      cursor-pointer
      `}>
          <Link
          className={`
          absolute
          top-2
          right-2
          `}>
            <button
            className={`
            flex
            bg-white
            p-1
            rounded-full
            border-[2px]
            aspect-square
            `}>
              <MdOutlineModeEditOutline/>
            </button>
          </Link>

          <span
          className={`
          mt-5
          bg-red-500
          inline
          w-[75px]
          h-[55px]
          rounded-xl
          `}
          />

          <span
          className={`
          flex
          flex-col
          items-center
          `}>
            <p
            className={`
            text-[17px]
            font-medium
            text-neutral-700
            `}>
                {language}
            </p>

            <p
            className={`
            text-[17px]
            font-thin
            text-neutral-500
            `}>
                {`${formatter.format(learners)} learners`}
            </p>
          </span>
          
      </div>
    </Link>
  )
}

export default LanguageCard