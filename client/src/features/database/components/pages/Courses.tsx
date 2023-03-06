import Preact from 'preact'
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
                    flag={item.flag}
                    language={item.Language}
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

const list = [
    {
        flag : null,
        Language : "English",
        learners : 15000450
    },
    {
        flag : null,
        Language : "Germen",
        learners : 10450
    },
    {
        flag : null,
        Language : "French",
        learners : 150
    }
]