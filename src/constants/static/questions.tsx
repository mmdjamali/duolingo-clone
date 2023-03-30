const questions = [
    {
        type : 'TranslateWithButtons',
        relevant : ["استفاده از کلمات ساده"],
        difficulty : "beginner",
        course : "en-fa",
        sentence : [
        {
            word : "Hi",
            meaning : "سلام"
            }
        ],
        meaning : "سلام",
        options : "سلام من تو".split(" ").sort((a,b) => .5 - Math.random()),
        id : "1"
    },
    {
        type : 'TranslateWithButtons',
        relevant : ["استفاده از کلمات ساده"],
        difficulty : "beginner",
        course : "en-fa",
        sentence : [
            {
                word : "I",
                meaning : "من"
            },
            {
                word : "am",
                meaning : "هستم"
            },
            
        ],
        meaning : "من هستم",
        options : "من هستم سلام چرا".split(" ").sort((a,b) => .5 - Math.random()),
        id : "2"
    },
 
]