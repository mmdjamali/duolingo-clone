import UnitSection from '../sections/learn/unit-section';

const Learn = () => {
  return (
    <div
    className={`
    w-full
    relative
    flex
    flex-col
    h-fit
    items-center
    justify-center
    min-h-screen
    sm:p-6
    lg:p-8
    `}>
        {course.units.map((unit , idx) => 
            <UnitSection
            unit={unit}
            idx={idx}
            />
        )}
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
                    lessons : [
                        {
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
                        }
                    ],


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