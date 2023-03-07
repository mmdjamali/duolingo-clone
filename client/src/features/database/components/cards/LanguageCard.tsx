import Preact from 'preact'
import { Link } from 'react-router-dom'
import {MdOutlineModeEditOutline} from "react-icons/md";

type language = {
  name : string,
  code : string
}

type props = {
    Flag : any,
    learn : language,
    language : language,
    learners : number,
    id : string
}



const LanguageCard : Preact.FunctionComponent<props> = ({
    Flag,
    learn,
    language,
    learners,
    id
}) => {

  let formatter = new Intl.NumberFormat(language.code,{
    notation : "compact"
  })

  return (
    <Link
    to={id}>
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
            text-neutral-400
            `}>
              <MdOutlineModeEditOutline
              />
            </button>
          </Link>
          {
            Flag ? <Flag
            className={`
            mt-5
            inline
            w-[75px]
            rounded-xl
            `}
            /> : ""
          }
          

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
                {learn.name}
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