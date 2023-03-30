import Preact from "preact"
import TextWithHint from "../../primitives/typography/text-with-hint"
import Question from "../../constructs/challanges/question"
import { useState } from "preact/hooks"
import TextButton from "../../primitives/buttons/text-button"
import Button from "../../../components/buttons/Button"
import { playCorrect, playWrong } from "../../../utils/sounds"
import { FaCheck } from "react-icons/fa"
import { MdOutlineClose, MdOutlineFlag } from "react-icons/md"

type sentenceType = {
    word : string,
    meaning : string,
    blank ?: boolean
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
const padding = `
  px-[16px] 
  sm:px-[32px] 
  md:px-[64px] 
  lg:px-[160px]
`

const selectCorrectOption : Preact.FunctionComponent<props> = ({
    correctAnswer,
    onContinue,
    onFail,
    onSuccess,
    options,
    sentence,
}) => {
    const [status,setStatus] = useState<"idle" | "success" | "fail">("idle")  
    const [answer,setAnswer] = useState<string>("")  

    return(
        <section
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

                <Question>

                    {sentence.map((item , idx) => {
                    return(
                        <TextWithHint
                        key={idx}
                        value={item.word}
                        meaning={item.meaning}
                        />
                    )
                    })}

                </Question>

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
                    grid
                    grid-cols-2
                    py-4
                    gap-3
                    h-fit
                    items-centers
                    justify-center
                    `}>
                        {
                        options.map((item : {value : string}, idx : number) => {
                            return(
                            <div
                            className={`
                            max-w-[150px]
                            w-full
                            `}>
                                <Button
                                onClick={() => {
                                    setAnswer(item.value)
                                }}
                                key={idx}
                                outlined
                                colors={
                                    "!w-full " + 
                                    (status === "idle" ? 
                                    item.value === answer ? 
                                        "bg-cyan-100 text-cyan-300 border-cyan-300" :
                                        "bg-white border-neutral-300 text-neutral-300" 
                                    : 
                                    sentence.filter(a => a.blank ?? false)[0].word === item.value ? 
                                        "bg-green-100 border-green-300 text-green-300" :
                                        "bg-red-100 border-red-300 text-red-300")
                                }
                                >
                                    {item?.value}
                                </Button>
                            </div>
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
                            if(sentence.filter(a => a.blank ?? false)[0].word === answer){
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
                                setAnswer("")
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
                                setAnswer("")
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

        </section>
    )
}

export default selectCorrectOption