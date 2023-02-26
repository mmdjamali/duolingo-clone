import Preact from 'preact'
import {useState} from 'preact/hooks'
import { MdOutlineClose, MdOutlineFlag} from "react-icons/md"
import Button from '../buttons/Button'
import { playCorrect, playWrong } from '../../utils/sounds'
import { FaCheck } from "react-icons/fa"
import TextWithHint from '../texts/TextWithHint'
import TextButton from '../texts/TextButton'

const padding = `
  px-[16px] 
  sm:px-[32px] 
  md:px-[64px] 
  lg:px-[160px]
`

const ChoiceChallenge = () => {
  const [percent,setPercent] = useState<number>(0)
  const [status,setStatus] = useState<"idle" | "success" | "fail">("idle")
  const [question , setQuestion] = useState<{word : string,meaning:string}[]>([
    {
      word:"Hello",
      meaning : "سلام"
    },
    {
      word:"How",
      meaning : "نجه"
    },
    {
      word:"Are",
      meaning : "لار , لر"
    },
    {
      word:"You?",
      meaning : "سیز , سن"
    },

  ])
  const [answer , setAnswer] = useState<{value : string , id : number}[]>([])
  
  const [data,setData] = useState("سلام نجه سیز؟ سن کیم او".split(" ").sort(() => 0.5 - Math.random()).map((item , idx) => {return{value : item , id : idx}}))

  return (
    <div
    className={`
    flex
    flex-col
    relative
    w-full
    h-screen
    `}
    >
      <div
      className={`
      ${padding}
      flex 
      items-center
      gap-4
      py-4
      `}>

        <button
        className={`
        text-neutral-400
        hover:text-neutral-300
        text-[2rem]
        transition-colors
        `}>
          <MdOutlineClose/>
        </button>

        <div
        className={`
        relative
        w-[100%]
        h-[16px]
        bg-neutral-200
        rounded-full
        `}>
          <div
          style={{
            width : percent + "%"
          }}
          className={`
          transition-all
          flex
          items-center
          justify-center
          relative
          h-full
          bg-green-500
          rounded-[inherit]
          `}>
            <span
            className={`
            flex
            w-[100%]
            mx-2
            h-[6px]
            bg-green-400
            rounded-full
            -translate-y-[25%]
            `}
            />
          </div>
        </div>

      </div>

      <div
      className={`
      ${padding}
      relative
      flex
      flex-col
      h-[100%]
      `}>

        <div>
          <h1
          className={`
          text-[1.5rem]
          font-black
          tracking-[1px]
          text-neutral-800
          `}
          >
            Write this in Azeri
          </h1>
        </div>

        <div
        className={`
        flex
        items-center
        `}>

          <div
          className={`
          inline-block
          bg-red-500
          w-[100px]
          h-[150px]
          
          `}
          >

          </div>

          <div
          className={`
          flex
          items-center
          justify-center
          `}>

            <span
            className={`
            flex-shrink-0
            relative
            w-[12px]
            h-[12px]
            border-b-[2px]
            border-l-[2px]
            rotate-45
            translate-x-[3px]
            z-[10]
            `}
            >
              <span
              className={`
              
              top-0
              right-0
              absolute
              w-[10px]
              h-[10px]
              bg-white
              `}
              />
            </span>

            <div
            className={`
            flex
            flex-wrap
            -translate-x-[4px]
            rounded-2xl
            bg-white
            border-[2px]
            p-4
            text-[1.2rem]
            font-light
            text-neutral-700
            gap-1
            `}>
                {question.map((item , idx) => {
                  return(
                    <TextWithHint
                    key={idx}
                    value={item.word}
                    meaning={item.meaning}
                    />
                  )
                })}
            </div>

          </div>

        </div>

        <div
        dir={"rtl"}
        className={`
        flex-shrink-0
        items-center
        flex
        w-[100%]
        h-[70px]
        border-y-[2px]
        gap-2
        `}>
          {answer.map((item, idx) => {
            return(
            <TextButton
            exists={false}
            key={idx}
            value={item.value}
            onClick={() => {
              setAnswer(prev => prev.filter((v , i) => i !== idx))
            }}
            />
            )
          })}
        </div>

        <div
        className={`
        flex
        flex-wrap
        gap-2
        h-full
        items-center
        justify-center
        `}>
          {
            data.map((item , idx) => {
              let bool = answer.some((v) => v.id === item.id)
              return(
                <TextButton
                exists={bool}
                key={idx}
                value={item.value}
                onClick={() => {
                  setAnswer(prev => [...prev, { value : item.value , id : item.id}])
                }}/>
              )
            })
          }
        </div>

      </div>

      <div
      className={`
      transition-all
      ${padding} 
      ${(() => {
        switch(status){
          case 'idle':
            return "flex-wrap-reverse"
          case 'success':
            return "bg-green-100 flex-wrap"
          case 'fail':
            return "bg-red-100 flex-wrap"
        }
      })()}
      relative
      flex
      items-center
      h-fit
      py-4
      gap-2
      place-items-center
      w-full
      gap-x-[4rem]
      sm:justify-between
      min-h-[150px]
      `}>
        {(() => {
          switch(status){
            case 'idle':
              return(
                <>
                  <span
                  className={`
                  top-0
                  left-[50%]
                  -translate-x-[50%]
                  inline
                  absolute
                  w-[100dvw]
                  h-[2px]
                  bg-neutral-200
                  `}/>

                  <div
                  className={`
                  relative
                  sm:w-[unset]
                  w-full
                  `}>
                    <Button
                    brightness='brightness-[20%]'
                    onClick={async (e) => {
                      return new Promise((resolve , reject) => setTimeout(() => {
                        setStatus("fail")
                        playWrong()
                        resolve()
                      },500))
                    }}
                    colors='
                    text-neutral-400
                    border-neutral-300
                    '
                    outlined>
                      Skip
                    </Button>

                  </div>

                  <div
                  className={`
                  transition-all
                  relative
                  sm:w-[unset]
                  w-full
                  `}>
                    <Button
                    onClick={async (e) => {
                      return new Promise((resolve , reject) => setTimeout(() => {
                        playCorrect()
                        setStatus("success")
                        resolve()
                      },1000))
                    }}>
                      check
                    </Button>
                  </div>
                </>
                )
            case 'success':
              return(
                <>
                  <div
                  className={`
                  w-[100%]
                  sm:w-[unset]
                  relative
                  flex
                  items-center
                  gap-3
                  `}>
                    <span
                    className={`
                    hidden
                    sm:flex
                    bg-white
                    p-5
                    text-[2.5rem]
                    rounded-full
                    text-green-500
                    `}>
                      <FaCheck/>
                    </span>

                    <div
                    className={`
                    w-[100%]
                    flex
                    flex-row
                    items-center
                    justify-between
                    sm:flex-col
                    sm:items-start
                    `}>
                      <div>
                        <h2
                        className={`
                        text-[1.5rem]
                        font-bold
                        text-green-500
                        `}>
                          Well done!
                        </h2>
                      
                        <span
                        className={`
                        text-[1rem]
                        font-thin
                        text-green-500
                        `}>
                          I'm trying to clone duolingo
                        </span>
                      </div>

                      <button
                      className={`
                      mt-3
                      flex
                      items-center
                      justify-center
                      gap-1
                      text-[1.2rem]
                      font-bold
                      text-green-500
                      hover:text-green-600
                      uppercase
                      tracking-[1px]
                      `}>
                        <MdOutlineFlag/>
                        <span
                        className={`
                        text-[.9rem]
                        hidden
                        sm:flex
                        `}>
                          Report
                        </span>
                      </button>

                    </div>

                  </div>

                  <div
                  className={`
                  relative
                  sm:w-[unset]
                  w-full
                  `}>
                    <Button
                    colors='
                    bg-green-500
                    border-green-600
                    text-white
                    '
                    onClick={async (e) => {
                      return new Promise((resolve , reject) => setTimeout(() => {
                        setStatus("idle")
                        setPercent(prev => prev + 10)
                        resolve()
                      },1000))
                    }}>
                      Continue
                    </Button>
                  </div>
                </>
              )
            case 'fail':
              return(
                <>
                  <div
                  className={`
                  w-[100%]
                  sm:w-[unset]
                  relative
                  flex
                  items-center
                  gap-3
                  `}>
                    <span
                    className={`
                    hidden
                    sm:flex
                    bg-white
                    p-5
                    text-[2.5rem]
                    rounded-full
                    text-red-500
                    `}>
                      <MdOutlineClose/>
                    </span>

                    <div
                    className={`
                    w-[100%]
                    flex
                    flex-row
                    items-center
                    justify-between
                    sm:flex-col
                    sm:items-start
                    `}>
                      <div>
                        <h2
                        className={`
                        text-[1.5rem]
                        font-bold
                        text-red-500
                        `}>
                          Correct solution:
                        </h2>
                      
                        <span
                        className={`
                        text-[1rem]
                        font-thin
                        text-red-500
                        `}>
                          I'm trying to clone duolingo
                        </span>
                      </div>

                      <button
                      className={`
                      mt-3
                      flex
                      items-center
                      justify-center
                      gap-1
                      text-[1.2rem]
                      font-bold
                      text-red-500
                      hover:text-red-600
                      uppercase
                      tracking-[1px]
                      `}>
                        <MdOutlineFlag/>
                        <span
                        className={`
                        text-[.9rem]
                        hidden
                        sm:flex
                        `}>
                          Report
                        </span>
                      </button>

                    </div>

                  </div>

                  <div
                  className={`
                  relative
                  sm:w-[unset]
                  w-full
                  `}>
                    <Button
                    colors='
                    bg-red-500
                    border-red-600
                    text-white
                    '
                    onClick={async (e) => {
                      return new Promise((resolve , reject) => setTimeout(() => {
                        setStatus("idle")
                        resolve()
                      },1000))
                    }}>
                      Continue
                    </Button>
                  </div>
                </>
              )
          }
        })()}


      </div>


    </div>
  )
}

export default ChoiceChallenge