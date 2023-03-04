import Preact from 'preact';
import LessonButton from '../../../../components/buttons/LessonButton';
import Button from '../../../../components/buttons/Button';
import { ImBook } from "react-icons/im";

const Learn = () => {

    let userProgress = {
        unit : 3,
        lesson :2,
    };

  return (
    <div
    className={`
    w-full
    relative
    flex
    flex-col
    items-center
    justify-center
    min-h-screen
    sm:p-3
    `}>
        {course.units.map((unit , idx) => {
            const color = colors[unit.character];

            return(
                <div
                className={`
                flex
                flex-col
                items-center
                w-full
                relative
                `}>
                    <div
                    className={`
                    flex
                    justify-between
                    items-center
                    w-full
                    sm:rounded-xl
                    ${color.background["500"]}
                    px-3
                    py-6
                    `}>

                        <div
                        className={`
                        flex-shrink-1
                        `}>
                            <h3
                            className={`
                            text-[1.5rem]
                            font-semibold
                            text-white
                            `}>
                                Unit {unit.unitNumber}
                            </h3>

                            <p
                            className={`
                            text-[19px]
                            font-light
                            text-white
                            `}>
                                {unit.unitName}
                            </p>
                        </div>

                        <div
                        className={`
                        flex-shrink-0
                        `}>
                            <Button
                            outlined
                            colors={`
                            flex
                            gap-2
                            ${color.border["600"]}
                            text-white
                            min-w-[0px]
                            w-fit
                            `}>
                                <span
                                className={`
                                text-[1.5rem]
                            
                                `}>
                                    <ImBook/>
                                </span>
                                
                                <span
                                className={`
                                hidden
                                sm:inline
                                `}>
                                    GuideBook
                                </span>
                            </Button>
                        </div>

                    </div>

                    <div
                    key={idx}
                    className={`
                    flex
                    flex-col
                    gap-6
                    py-3
                    `}>
                        {unit.sections.map((lesson,idx) => {
                            return(
                                <LessonButton
                                character={unit?.character}
                                colors={{
                                    bg : color.background[500],
                                    border : color.background[600],
                                    text : color.text[500]
                                }}
                                isComplete={(unit.unitNumber < userProgress.unit.toString()) || ((idx + 1 < userProgress.lesson) && (unit.unitNumber <= userProgress.unit.toString()))}
                                isCurrent={(unit.unitNumber === userProgress.unit.toString()) && (idx + 1 === userProgress.lesson)}
                                idx={idx}
                                />
                            )
                        })}

                    </div>
                </div>
            )

        })}
    </div>
  )

}

export default Learn

const course = 
{
    learn : "English",
    language : "Persian",
    units : [
        {
            unitNumber : "1",
            unitName : "Use basic phrases, greet people",
            character : "MmD",
            unitGuide : "",
            sections : [
                {
                    section : "1",
                    type : "",
                    lessons : [{
                        questions : [
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
                                id : "1"
                            },
                        ]
                    }],


                },
                {
                    section : "2",
                    type : "",
                    lessons : [{
                        questions : [
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
                                id : "1"
                            },
                        ]
                    }],


                },
                {
                    section : "3",
                    type : "",
                    lessons : [{
                        questions : [
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
                                id : "1"
                            },
                        ]
                    }],


                },
                {
                    section : "4",
                    type : "",
                    lessons : [{
                        questions : [
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
                                id : "1"
                            },
                        ]
                    }],


                },
                {
                    section : "5",
                    type : "",
                    lessons : [{
                        questions : [
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
                                id : "1"
                            },
                        ]
                    }],


                },
                {
                    section : "6",
                    type : "",
                    lessons : [{
                        questions : [
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
                                id : "1"
                            },
                        ]
                    }],


                },
                {
                    section : "7",
                    type : "",
                    lessons : [{
                        questions : [
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
                                id : "1"
                            },
                        ]
                    }],


                },
                {
                    section : "8",
                    type : "",
                    lessons : [{
                        questions : [
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
                                id : "1"
                            },
                        ]
                    }],


                },
                {
                    section : "9",
                    type : "",
                    lessons : [{
                        questions : [
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
                                id : "1"
                            },
                        ]
                    }],


                },
                {
                    section : "10",
                    type : "",
                    lessons : [{
                        questions : [
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
                                id : "1"
                            },
                        ]
                    }],


                },
            ]
        },
        {
            unitNumber : "2",
            unitName : "Use basic phrases, greet people",
            character : "Semih",
            unitGuide : "",
            sections : [
                {
                    section : "1",
                    type : "",
                    lessons : [{
                        questions : [
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
                                id : "1"
                            },
                        ]
                    }],


                },
                {
                    section : "2",
                    type : "",
                    lessons : [{
                        questions : [
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
                                id : "1"
                            },
                        ]
                    }],


                },
                {
                    section : "3",
                    type : "",
                    lessons : [{
                        questions : [
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
                                id : "1"
                            },
                        ]
                    }],


                },
                {
                    section : "4",
                    type : "",
                    lessons : [{
                        questions : [
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
                                id : "1"
                            },
                        ]
                    }],


                },
                {
                    section : "5",
                    type : "",
                    lessons : [{
                        questions : [
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
                                id : "1"
                            },
                        ]
                    }],


                },
                {
                    section : "6",
                    type : "",
                    lessons : [{
                        questions : [
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
                                id : "1"
                            },
                        ]
                    }],


                },
                {
                    section : "7",
                    type : "",
                    lessons : [{
                        questions : [
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
                                id : "1"
                            },
                        ]
                    }],


                },
                {
                    section : "8",
                    type : "",
                    lessons : [{
                        questions : [
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
                                id : "1"
                            },
                        ]
                    }],


                },
                {
                    section : "9",
                    type : "",
                    lessons : [{
                        questions : [
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
                                id : "1"
                            },
                        ]
                    }],


                },
                {
                    section : "10",
                    type : "",
                    lessons : [{
                        questions : [
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
                                id : "1"
                            },
                        ]
                    }],


                },
            ]
        },
        {
            unitNumber : "3",
            unitName : "Use basic phrases, greet people",
            character : "King",
            unitGuide : "",
            sections : [
                {
                    section : "1",
                    type : "",
                    lessons : [{
                        questions : [
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
                                id : "1"
                            },
                        ]
                    }],


                },
                {
                    section : "2",
                    type : "",
                    lessons : [{
                        questions : [
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
                                id : "1"
                            },
                        ]
                    }],


                },
                {
                    section : "3",
                    type : "",
                    lessons : [{
                        questions : [
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
                                id : "1"
                            },
                        ]
                    }],


                },
                {
                    section : "4",
                    type : "",
                    lessons : [{
                        questions : [
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
                                id : "1"
                            },
                        ]
                    }],


                },
                {
                    section : "5",
                    type : "",
                    lessons : [{
                        questions : [
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
                                id : "1"
                            },
                        ]
                    }],


                },
                {
                    section : "6",
                    type : "",
                    lessons : [{
                        questions : [
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
                                id : "1"
                            },
                        ]
                    }],


                },
                {
                    section : "7",
                    type : "",
                    lessons : [{
                        questions : [
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
                                id : "1"
                            },
                        ]
                    }],


                },
                {
                    section : "8",
                    type : "",
                    lessons : [{
                        questions : [
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
                                id : "1"
                            },
                        ]
                    }],


                },
                {
                    section : "9",
                    type : "",
                    lessons : [{
                        questions : [
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
                                id : "1"
                            },
                        ]
                    }],


                },
                {
                    section : "10",
                    type : "",
                    lessons : [{
                        questions : [
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
                                id : "1"
                            },
                        ]
                    }],


                },
            ]
        },
    ]
}

const colors : {
    [name : string] : {
        background : {[i : string] : string},
        border : {[i : string] : string},
        text : {[i : string] : string},
    }
} = {
    "MmD" : {
        background : {
            "100" : "bg-violet-100",
            "200" : "bg-violet-200",
            "300" : "bg-violet-300",
            "400" : "bg-violet-400",
            "500" : "bg-violet-500",
            "600" : "bg-violet-600",
            "700" : "bg-violet-700",
        },
        border : {
            "100" : "border-violet-100",
            "200" : "border-violet-200",
            "300" : "border-violet-300",
            "400" : "border-violet-400",
            "500" : "border-violet-500",
            "600" : "border-violet-600",
            "700" : "border-violet-700",
        },
        text : {
            "100" : "text-violet-100",
            "200" : "text-violet-200",
            "300" : "text-violet-300",
            "400" : "text-violet-400",
            "500" : "text-violet-500",
            "600" : "text-violet-600",
            "700" : "text-violet-700",
        },
    },
    "Semih" : {
        background : {
            "100" : "bg-green-100",
            "200" : "bg-green-200",
            "300" : "bg-green-300",
            "400" : "bg-green-400",
            "500" : "bg-green-500",
            "600" : "bg-green-600",
            "700" : "bg-green-700",
        },
        border : {
            "100" : "border-green-100",
            "200" : "border-green-200",
            "300" : "border-green-300",
            "400" : "border-green-400",
            "500" : "border-green-500",
            "600" : "border-green-600",
            "700" : "border-green-700",
        },
        text : {
            "100" : "text-green-100",
            "200" : "text-green-200",
            "300" : "text-green-300",
            "400" : "text-green-400",
            "500" : "text-green-500",
            "600" : "text-green-600",
            "700" : "text-green-700",
        },
    },
    "King" : {
        background : {
            "100" : "bg-rose-100",
            "200" : "bg-rose-200",
            "300" : "bg-rose-300",
            "400" : "bg-rose-400",
            "500" : "bg-rose-500",
            "600" : "bg-rose-600",
            "700" : "bg-rose-700",
        },
        border : {
            "100" : "border-rose-100",
            "200" : "border-rose-200",
            "300" : "border-rose-300",
            "400" : "border-rose-400",
            "500" : "border-rose-500",
            "600" : "border-rose-600",
            "700" : "border-rose-700",
        },
        text : {
            "100" : "text-rose-100",
            "200" : "text-rose-200",
            "300" : "text-rose-300",
            "400" : "text-rose-400",
            "500" : "text-rose-500",
            "600" : "text-rose-600",
            "700" : "text-rose-700",
        },
    },
}