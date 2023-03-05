import Preact from 'preact';
import {useState , useEffect} from 'preact/hooks'
import { MdOutlineClose, MdOutlineFlag} from "react-icons/md"
import Button from '../../../../components/buttons/Button';
import { playCorrect, playWrong } from "../../../../utils/sounds"
import { FaCheck } from "react-icons/fa"
import TextWithHint from '../../../../components/texts/TextWithHint';
import TextButton from '../../../../components/texts/TextButton';

const padding = `
  px-[16px] 
  sm:px-[32px] 
  md:px-[64px] 
  lg:px-[160px]
`
type sentenceType = {
  word : string,
  meaning : string
}

type props = {
  onContinue : () => void,
  options : {
    value : string,
    id : number
  }[],
  correctAnswer : string,
  sentence: sentenceType[],
  onFail : () => void,
  onSuccess : () => void
}

const TranslateWithButtons : Preact.FunctionComponent<props> = ({
  onContinue,
  sentence,
  correctAnswer,
  options,
  onFail,
  onSuccess,
}) => {
  const [status,setStatus] = useState<"idle" | "success" | "fail">("idle")  
  const [answer,setAnswer] = useState<{value : string , id : number}[] | []>([])  

  return (
    <div
    className={`
    flex
    flex-col
    relative
    w-full
    h-[calc(100vh_-_64px)]
    `}
    >

      <div
      className={`
      ${padding}
      relative
      flex
      flex-col
      h-[100%]
      overflow-auto
      `}>

        {/* Header */}
        <div>
          <h1
          className={`
          text-[1.5rem]
          font-black
          tracking-[1px]
          text-neutral-700
          `}
          >
            Translate this to Turkish
          </h1>
        </div>

        {/* Question */}
        <div
        className={`
        flex
        `}>

          <div
          className={`
          self-end
          flex-shrink-0
          inline-block
          border-[2px]
          border-b-[0px]
          rounded-t-2xl
          w-[100px]
          h-[150px]
          `}
          >

          </div>

          <div
          className={`
          self-center
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
                {sentence.map((item , idx) => {
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
        
        {/* Field */}
        <div
        className={`
        flex-shrink-0
        items-center
        flex
        flex-wrap
        w-[100%]
        min-h-[70px]
        py-2
        border-y-[2px]
        gap-1
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

        {/* Answer options */}
        <div
        className={`
        flex
        justify-center
        items-center
        h-full
        `}>
          <div
          className={`
          flex
          flex-wrap
          py-4
          gap-1
          h-fit
          items-centers
          justify-center
          `}>
            {
              options.map((item , idx) => {
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
      </div>

      <div
      className={`
      
      transition-all
      ${padding} 
      ${(() => {
        switch(status){
          case 'idle':
            return "flex-wrap-reverse border-t-[2px]"
          case 'success':
            return "bg-green-100 flex-wrap"
          case 'fail':
            return "bg-red-100 flex-wrap"
        }
      })()}
      relative
      flex
      items-center
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
                  <div
                  className={`
                  relative
                  sm:w-[unset]
                  w-full
                  `}>
                    <Button
                    brightness='brightness-[20%]'
                    onClick={async (e) => {
                      onFail()
                      setStatus("fail")
                      playWrong()
                    }}
                    colors={`
                    text-neutral-400
                    border-neutral-300
                    `}
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
                    disabled={!answer.length}
                    onClick={async (e) => {
                      if(correctAnswer.replaceAll(" ","").toLowerCase() === answer?.map(i => i.value).join("").replaceAll(" ","").toLowerCase()){
                        onSuccess()
                        setStatus("success")
                        playCorrect()
                        return
                      }
                      onFail()
                      setStatus("fail")
                      playWrong()
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
                          {correctAnswer}
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
                        setStatus("idle")
                        setAnswer([])
                        onContinue()
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
                          {correctAnswer}
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
                        setStatus("idle")
                        setAnswer([])
                        onContinue()
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

export default TranslateWithButtons