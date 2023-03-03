import Preact from 'preact';
import LessonButton from '../../../../components/buttons/LessonButton';


const Learn = () => {

    let userProgress = 9

  return (
    <div
    className={`
    flex
    flex-col
    items-center
    justify-center
    min-h-screen
    py-4
    `}>
        {course.units.map((item , idx) => {

            return(
                <div
                className={`
                flex
                flex-col
                gap-6
                `}>
                    {item.sections.map((lesson,idx) => {
                        return(
                            <LessonButton
                            colors={{
                                bg : "bg-green-500",
                                border : "bg-green-600",
                                text : "text-green-500"
                            }}
                            isComplete={idx + 1 < userProgress}
                            isCurrent={idx + 1 === userProgress}
                            idx={idx}
                            />
                        )
                    })}

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
        }
    ]
}