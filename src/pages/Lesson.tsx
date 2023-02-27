import Preact from 'preact'
import { useState , useReducer } from "preact/hooks";
import { MdOutlineClose } from 'react-icons/md'
import TranslateWithButtons from '../components/challenges/TranslateWithButtons';

type actionType = {
    type : string,
    payload? : any
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
}

type questionType = {
    type : "TranslateWithButtons",
    sentence : string,
    meaning : string,
    options : string[],
    id : string,
}


function Lesson() {
    const [challenges, updateChallenges] = useReducer((prev : prevType,action : actionType) => {
        switch(action.type){
            case "next":{
                if(prev.questions.length <= 1){
                    if(prev.fail.length){
                        // go to status
                        console.log("lets go to the status")
                    }
                    return{
                        ...prev,
                        fail : [],
                        questions: [...prev.fail]
                    }
                }
                return{
                    ...prev,
                    questions : prev.questions.filter((_,idx) => idx !== 0)
                }
            }
            case "correct":{
                if(prev.correct.includes(prev.questions[0])) return {...prev}

                return {
                    ...prev,
                    correct : [...prev.correct, prev.questions[0]],
                    progress : ([...prev.correct, prev.questions[0]].length / prev.length) * 100
                }
            }
            case "wrong" : {
                if(prev.fail.includes(prev.questions[0])) return {...prev}
                
                return{
                    ...prev,
                    fail : [...prev.fail, prev.questions[0]],
                    mistakes : prev.mistakes.includes(prev.questions[0].id) ? [...prev.mistakes] : [...prev.mistakes, prev.questions[0].id]
                }
            }
        }
        return{...prev}
    },{
        length : questions.length,
        questions : questions,
        correct : [],
        fail : [],
        redoing : false,
        streak : 0,
        mistakes : [],
        progress : 0
    })

  return (
    <div
    className={`
    w-full
    min-h-screen
    `}>
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
                    width : challenges.progress + "%"
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

            {(() => {
                const Component = Components[challenges.questions[0].type]
                return(
                <Component
                onSuccess={() => {
                    updateChallenges({
                        type : "correct"
                    })
                }}
                onFail={() => {
                    updateChallenges({
                        type : "wrong"
                    })
                }}
                sentence={challenges.questions[0].sentence}
                correctAnswer={challenges.questions[0].meaning}
                options={challenges.questions[0].options.map((v,i) => {
                    return{
                        value : v,
                        id : i
                    }
                })}
                onContinue={() => {
                    updateChallenges({
                        type : "next"
                    })
                }}
            
    
            />)
            })()}

    </div>
  )


}

export default Lesson

const questions : questionType[]= [
    {
        type : 'TranslateWithButtons',
        sentence : "Hello",
        meaning : "سلام",
        options : "سلام تو کدوم".split(" "),
        id : "1"
    },
    {
        type : 'TranslateWithButtons',
        sentence : "Bye",
        meaning : "خداحافظ",
        options : "خداحافظ تو کدوم".split(" "),
        id : "2"
    },
    {
        type : 'TranslateWithButtons',
        sentence : "Me",
        meaning : "من",
        options : "سلام تو من کدوم".split(" "),
        id : "3"
    }
]

const Components = {
    "TranslateWithButtons" : TranslateWithButtons,
}


const padding = `
  px-[16px] 
  sm:px-[32px] 
  md:px-[64px] 
  lg:px-[160px]
`

