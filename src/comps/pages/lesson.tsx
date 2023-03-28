import Preact from 'preact'
import { useState , useReducer } from "preact/hooks";
import { MdOutlineClose } from 'react-icons/md'
import TranslateWithButtons from '../sections/challanges/translate-with-text-buttons';
import Results from '../sections/results';
import AnimateChallenges from '../../components/animations/AnimateChallenges';

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
    start : Date | null;
    finish : Date | null;
}

type sentenceType = {
    word : string,
    meaning : string
}

type questionType = {
    type : "TranslateWithButtons",
    sentence : sentenceType[],
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
                        return{
                            ...prev,
                            fail : [],
                            questions: [...prev.fail],
                        }
                    }
                    return{
                        ...prev,
                        fail : [],
                        questions: [...prev.fail],
                        finish : new Date(Date.now()),
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
                    progress : ([...prev.correct, prev.questions[0]].length / prev.length) * 100,
                    streak : prev.streak + 1
                }
            }
            case "wrong" : {
                if(prev.fail.includes(prev.questions[0])) return {...prev}
                
                return{
                    ...prev,
                    fail : [...prev.fail, prev.questions[0]],
                    mistakes : prev.mistakes.includes(prev.questions[0].id) ? [...prev.mistakes] : [...prev.mistakes, prev.questions[0].id],
                    streak : 0
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
        progress : 0,
        start : new Date(Date.now()),
        finish : null
    })

    if(challenges.questions.length === 0)return(
        <Results
        challenges={challenges}/>
    )

  return (
    <div
    className={`
    w-full
    min-h-screen
    overflow-x-hidden
    
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
                duration-500
                flex
                items-center
                justify-center
                relative
                h-full
                ${challenges.streak >= 5 ? "bg-yellow-400" : "bg-green-500"}
                rounded-[inherit]
                `}>
                    <span
                    className={`
                    transition-all
                    duration-500
                    flex
                    w-[100%]
                    mx-2
                    h-[6px]
                    ${challenges.streak >= 5 ? "bg-yellow-300" : "bg-green-400"}
                    rounded-full
                    -translate-y-[25%]
                    `}
                    />
                </div>
            </div>

        </div>

        {/* { (challenges.mistakes.length === 0 && challenges.progress === 100) &&
        <h3
        className={`
        absolute
        bottom-[50%]
        right-[50%]
        translate-y-[50%]
        translate-x-[50%]
        text-yellow-400
        text-[4rem]
        font-bold
        select-none
        drop-shadow-[0_0px_10px_rgba(250,204,21,.5)]
        z-50
        animate-perfect
        pointer-events-none
        `}>
            Perfect!
        </h3>
        } */}
        
            {(() => {
                if(!challenges.questions[0])return<></>
                const Component = Components[challenges.questions[0].type]
                return(
                <AnimateChallenges
                question={challenges.questions[0]}>
                    <Component
                    key={challenges.questions[0]}
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
                    />
                </AnimateChallenges>
            )
            })()}

    </div>
  )

}

export default Lesson

const questions : questionType[]= [
    {
        type : 'TranslateWithButtons',
        sentence : [
            {
            word : "Hi",
            meaning : "Selam"
            },
        ],
        meaning : "Selam",
        options : "Selam ben sen hadi".split(" ").sort((a,b) => .5 - Math.random()),
        id : "1"
    },
    {
        type : 'TranslateWithButtons',
        sentence : [
            {
            word : "Eat",
            meaning : "Ye"
            }
        ],
        meaning : "Ye",
        options : "Selam Ye sen iç".split(" ").sort((a,b) => .5 - Math.random()),
        id : "2"
    },
    {
        type : 'TranslateWithButtons',
        sentence : [
            {
            word : "Hi",
            meaning : "Selam"
            },
            {
            word : "I'm",
            meaning : "ben"
            },
            {
            word : "Mohammad",
            meaning : "Muhammed"
            },
        ],
        meaning : "Selam ben Muhammed",
        options : "Selam ben Muhammed sen benim".split(" ").sort((a,b) => .5 - Math.random()),
        id : "3"
    },
    {
        type : 'TranslateWithButtons',
        sentence : [
            {
                word : "A",
                meaning : "bir"
            },
            {
                word : "Front-end",
                meaning : "Front-end"
            },
            {
                word : "developer",
                meaning : "geliştirici"
            },
        ],
        meaning : "Bir Front-end geliştirici",
        options : "Bir Front-end geliştirici React Iki".split(" ").sort((a,b) => .5 - Math.random()),
        id : "4"
    },
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

