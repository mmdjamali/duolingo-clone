import Preact from 'preact'
import { flags } from '../../../../utils/Flags'
import LanguageCard from '../cards/LanguageCard'
import AddLanguageCard from '../cards/AddLanguageCard'

function Courses() {
  return (
    <>
        <div
        className={`
        flex
        -center
        `}>
            <h1
            className={`
            text-[1.5rem]
            font-bold
            `}>
                Courses
            </h1>

        </div>

        <div
        className={`
        grid
        grid-cols-[repeat(auto-fill,minmax(160px,1fr))]
        h-full
        w-full
        justify-start
        place-items-stretch
        gap-3
        `}>
            {list.map((item,idx) => {
                return(
                    <LanguageCard
                    id={item.id}
                    key={idx}
                    Flag={flags[item.learn.code]}
                    language={item.language}
                    learn={item.learn}
                    learners={item.learners}
                    />
                )
            })}

            <AddLanguageCard
            language='Add New'
            flag={null}
            />
        </div>

    </>
  )
}

export default Courses

type language = {
    name : string,
    code : string
  }
  

type course = {
    id : string,
    learn : language,
    language : language,
    learners : number,
    units ?: any,
}

const list : course[] = [
    {
        id : "en-fa",
        learn : {
            name : "انگلیسی",
            code : "en"
        },
        language : {
            name : "Persian",
            code : "fa-ir"
        },
        learners : 0,
        units : [
            {
                id : "1",
                description : "الفبای انگلیسی رو یادبگیریم",
                guidebook : {},
                lessons : [
                    {
                        id : "1",
                        sections : [
                            {
                                id : "1",
                                challenges : [
                                    {

                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id : "2",
                        sections : [
                            {
                                id : "1",
                                challenges : [
                                    {

                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id : "2",
                        sections : [
                            {
                                id : "1",
                                challenges : [
                                    {

                                    }
                                ]
                            }
                        ]
                    },
                ]
            }
        ]
    }
]