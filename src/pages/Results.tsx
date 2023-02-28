import Preact from 'preact'
import { FiTarget } from "react-icons/fi";
import { BiTimeFive } from "react-icons/bi";
import { SlEnergy } from "react-icons/sl";
import Button from '../components/buttons/Button';

type questionType = {
    type : "TranslateWithButtons",
    sentence : sentenceType[],
    meaning : string,
    options : string[],
    id : string,
}

type prevType = {
    length : number;
    questions:  questionType[] | [];
    redoing: boolean;
    correct: any[];
    fail: any[];
    streak : number;
    mistakes : string[];
    progress : number;
    start : Date | null;
    finish : Date | null;
}

type sentenceType = {
    word : string,
    meaning : string
}

type props = {
    challenges : prevType
}

const Results :Preact.FunctionComponent<props> = ({
    challenges
}) => {

  return (
    <div
    className={`
    w-full
    min-h-screen
    flex
    flex-col
    items-center
    justify-between
    py-[1rem]
    ${padding}
    `}>
        <div
        className={`
        text-center
        flex
        flex-col
        items-center
        `}>

            <h1
            className={`
            text-yellow-400
            text-[3.5rem]
            font-extrabold
            `}>
                Lesson complete!
            </h1>

        </div>

        <div
        className={`
        flex
        items-center
        justify-center
        border-[2px]
        rounded-2xl
        w-[150px]
        h-[200px]
        `}>
        </div>

        <div
        className={`
        flex
        flex-wrap
        justify-center
        items-center
        py-4
        gap-4
        `}>

            {status.map((item,idx) => {
                return(
                <div
                key={idx}
                className={`
                flex
                flex-col
                items-center
                p-[2px]
                pt-0
                ${item.bgColor}
                rounded-[.9rem]
                `}>

                    <span
                    className={`
                    font-bold
                    text-white
                    text-[13px]
                    p-[2px]
                    uppercase
                    `}>
                        {item.title}
                    </span>

                    <div
                    className={`
                    ${item.fontColor}
                    flex
                    items-center
                    justify-center
                    bg-white
                    w-[90px]
                    h-[65px]
                    px-1
                    gap-1
                    rounded-[.75rem]
                    `}>
                        <span
                        className={`
                        text-[1.8rem]
                        `}>
                            <item.icon/>
                        </span>

                        <span
                        className={`
                        font-bold
                        text-[18px]
                        `}>
                            {item.getResult(challenges)}
                        </span>
                    </div>

                </div>
                )
            })}

        </div>

        <div
        className={`
        max-w-[500px]
        w-full
        `}>

            <Button
            colors='
            bg-blue-500
            border-blue-600
            text-white
            '>
                Continue
            </Button>

        </div>
        

    </div>
  )
}

export default Results

const status = [
    {
        title : "total xp",
        icon : SlEnergy,
        bgColor : "bg-yellow-400",
        fontColor : "text-yellow-400",
        getResult : ({mistakes} : prevType) => {
            return 20 - mistakes.length;
        }
    },
    {
        title : "great!",
        icon : FiTarget,
        bgColor : "bg-green-500",
        fontColor : "text-green-500",
        getResult : ({mistakes , length} : prevType) => {
            return `${Math.round(((length - mistakes.length) / length) * 100)}%`
        }
    },
    {
        title : "quick",
        icon : BiTimeFive,
        bgColor : "bg-blue-500",
        fontColor : "text-blue-500",
        getResult : ({start , finish} : prevType) => {
            if(!start || !finish) {
                console.log(start,finish)
                return
            }

            let time = Math.round((finish?.getTime() - start?.getTime()) / 1000)

            let minutes = Math.floor(time / 60)
            let seconds = Math.floor(time - (minutes * 60))

            return`${minutes >= 10 ? "" : "0"}${minutes}:${seconds >= 10 ? "" : "0"}${seconds}`
        }
    },

]

const padding = `
  px-[16px] 
  sm:px-[32px] 
  md:px-[64px] 
  lg:px-[160px]
`