import Preact from "preact"
import unit_type from "../../../types/unit-type"
import { colors } from "../../../constants/characters"
import LessonButton from "../../constructs/learn/LessonButton"
import Button from "../../../components/buttons/Button"
import { ImBook } from "react-icons/im"

type props = {
    unit : unit_type,
    idx : number
}

export default ({
    unit,
    idx
} : props)=> {
    let userProgress = {
        unit : 3,
        lesson :2,
    };
    const color = colors[unit.character];

    return(
        <section
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
                    !min-w-[0px]
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
        </section>
    )
}