import Preact from 'preact'
import { TiArrowLeftThick } from 'react-icons/ti'
import Button from '../../../../components/buttons/Button'
import { Route, Routes, useNavigate, useParams } from 'react-router'
import Input from '../../../../components/inputs/Input'
import { useReducer } from 'preact/hooks'
import LessonButton from '../buttons/LessonButtonDB'
import { colors } from '../../../../utils/characters'
import Lesson from './Lesson'

type action = {
    type : "addLesson" | "updateDescription" | "updateCharacter",
    payload : any
}

type lesson = {
    id : string,
    type : "lesson",
    sections : any[] | null,
}

type reward = {
    id : string,
    type : "reward",
    reward : {
        type : "xp",
        count : 20
    }
}

type unit = {
    id : string,
    description : string,
    character : string,
    lessons : string[]
}

type props = {
    data : {
        [unit : string] : unit,
    },
    updateCourse : (payload : { unit : string , data : unit }) => void
}

const Unit : Preact.FunctionComponent<props> = ({
    data,
    updateCourse
}) => {
    const params = useParams()

    const [unit , updateUnit] = useReducer((prev : unit , action : action) => {
        
        switch(action.type){
            case 'addLesson':
                return{
                    ...prev
                }
            case 'updateDescription':
                return{
                    ...prev,
                    description : action.payload.value
                }
            case 'updateCharacter':
                return{
                    ...prev,
                    character : action.payload.value
                }
            default : 
            return {
                ...prev
            }
        }
    },
    {
        ...data[params.unit || ""]
    }
    )
    const navigate = useNavigate()

  return (
    <Routes>
        <Route path="/" element={
            <>
                <div
                className={`
                w-full
                flex
                flex-row
                justify-between
                `}>

                    <div
                    className={`
                    h-[51px]
                    flex
                    flex-col
                    justify-end
                    items-end
                    `}>
                        <button
                        onClick={() => {
                            navigate(-1)
                        }}
                        className={`
                        text-blue-400
                        text-[2rem]
                        border-[2px]
                        border-b-[4px]
                        active:border-b-[2px]
                        p-1.5
                        rounded-2xl
                        `}
                        >
                            <TiArrowLeftThick/>
                        </button>
                    </div>

                    <div
                    className={`
                    w-fit
                    `}>
                        <Button
                        onClick={() => {
                            updateCourse({
                                unit : params.unit ?? "",
                                data : unit
                            })
                        }}
                        disabled={JSON.stringify(unit) === JSON.stringify(data[params.unit || ""])}
                        outlined
                        colors='
                        w-fit
                        text-blue-400
                        '>
                            Save changes
                        </Button>
                    </div>

                </div>

                <div
                className={`
                relative
                flex
                flex-col
                h-full
                w-full
                gap-3
                `}>
                    <div
                    className={`
                    w-full
                    flex
                    flex-col
                    sm:flex-row
                    gap-3
                    `}>
                        <div
                        className={`
                        w-full
                        flex
                        flex-col
                        `}>
                            <span
                            className={`
                            text-[19px]
                            text-neutral-700
                            `}>
                                Description :
                            </span>
                            
                            <Input
                            type='text'
                            value={unit.description}
                            setValue={(v : string | null) => {
                                updateUnit({
                                    type : "updateDescription",
                                    payload : {
                                        value : v 
                                    }
                                })
                            }}
                            />
                        </div>

                        <div
                        className={`
                        w-full
                        flex
                        flex-col
                        `}>
                            <span
                            className={`
                            text-[19px]
                            text-neutral-700
                            `}>
                                Character :
                            </span>

                            <Input
                            type='text'
                            value={unit.character}
                            setValue={(v : string | null) => {
                                updateUnit({
                                    type : "updateCharacter",
                                    payload : {
                                        value : v 
                                    }
                                })
                            }}/>
                        </div>
                    </div>

                    <div
                    className={`
                        w-full
                        flex
                        flex-col
                        gap-3
                    `}>

                        <span
                        className={`
                        text-[19px]
                        text-neutral-700
                        `}>
                            Lessons :
                        </span>

                        <div
                        className={`
                        flex
                        flex-col
                        gap-6
                        py-3
                        `}>
                            {unit?.lessons?.map((item , idx) => {
                                const color = colors[unit.character] ?? colors["blank"]
                                return(
                                    <LessonButton
                                    character={unit.character}
                                    colors={{
                                        bg : color?.background["500"],
                                        border : color?.background["600"],
                                        text : color?.text["500"]
                                    }}
                                    idx={idx}
                                    />
                                )
                            })}
                        </div>

                    </div>
                </div>
            </>
        }/>

        <Route path="/:lesson/*" element={<Lesson/>}/>
    </Routes>
  )
}

export default Unit