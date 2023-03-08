import Preact from 'preact'
import {TiArrowLeftThick} from "react-icons/ti"
import { Routes, useNavigate ,Route } from 'react-router'
import Button from '../../../../components/buttons/Button'
import { BsPlusLg } from "react-icons/bs";
import SelectLanguage from '../inputs/SelectLanguage'
import { useReducer } from 'preact/hooks'
import { colors } from '../../../../utils/characters'
import { Link } from 'react-router-dom';
import Unit from './Unit';

const placeHolder = {
    character : "King",
    description : "Use the present tense, get around town",
    lessons : new Array(10).fill("")
}

type action = {
    type : "updateLanguage" | "updateLearn" | "updateUnit",
    payload : {
        name ?: string,
        code ?: string,
        unit ?: string,
        data ?: unit
    }
}

type language = {
    name : string,
    code : string
}

type unit = {
    id : string,
    character : string,
    description : string,
    lessons : string[]
}

type course = {
    id : string,
    learn : language,
    language : language,
    units : {[unit : string] : unit}
}

const Course = () => {
    const [course , updateCourse] = useReducer((prev : course , action : action ) => {
        switch(action.type){
            case "updateLanguage" : 
                return {
                    ...prev,
                    language : {
                        name : action.payload.name || "",
                        code : action.payload.code || "",
                    }
                }
            case "updateLearn" :
                return {
                    ...prev,
                    learn : {
                        name : action.payload.name || "",
                        code : action.payload.code || "",
                    }
                }

            case "updateUnit" :           
                return{
                    ...prev,
                    units : {
                        ...prev.units,
                        [action.payload.unit || ""] : action.payload.data || {...placeHolder , id : prev.units[action.payload.unit || ""].id}
                    }
                }
            default :
            return {
                ...prev
            }
        }
    },
    {
        id : "en-fa",
        learn : {
            name : "english",
            code : "en"
        },
        language : {
            name : "persian",
            code : "fa"
        },
        units : {
            "Unit 1" : {
                id : "1",
                character : "MmD",
                description : "Use basic phrases, greet people",
                lessons : new Array(10).fill("")
            },
            "Unit 2" : {
                id : "2",
                character : "Semih",
                description : "Introduce yourself",
                lessons : new Array(10).fill("")
            },
            "Unit 3" : {
                id : "3",
                character : "King",
                description : "Use the present tense, get around town",
                lessons : new Array(10).fill("")
            },
        }
    })
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
                            navigate("/database/courses")
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
                                Learn :
                            </span>
                            
                            <SelectLanguage
                            type='text'
                            setValue={(data) => {
                                updateCourse({
                                    type : "updateLearn",
                                    payload : {
                                        name : data.name,
                                        code : data.code
                                    }
                                })
                            }}
                            value={course.learn.name}
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
                                Language :
                            </span>

                            <SelectLanguage
                            type='text'
                            setValue={(data) => {
                                updateCourse({
                                    type : "updateLanguage",
                                    payload : {
                                        name : data.name,
                                        code : data.code
                                    }
                                })
                            }}
                            value={course.language.name}
                            />
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
                            Units :
                        </span>

                        <div
                        className={`
                        grid
                        gap-3
                        grid-cols-[repeat(auto-fill,minmax(160px,1fr))]
                        `}>
                            {Object.entries(course.units).map((item,idx) => {
                                const color = colors[item[1].character] || colors["blank"]; 
                                return(
                                    <Link
                                    to={item[0]}
                                    key={idx}
                                    className={`
                                    flex
                                    flex-col
                                    select-none
                                    font-bold
                                    cursor-pointer
                                    items-start
                                    ${color.background[500]}
                                    text-white
                                    ${color.border[600]}
                                    rounded-2xl
                                    border-[2px]
                                    border-b-[4px]
                                    flex
                                    text-[1.5rem]
                                    p-4
                                    `}>
                                        <span>
                                            {item[0]}
                                        </span>

                                        <span
                                        className={`
                                        text-[17px]
                                        font-light
                                        `}>
                                            {item[1].description}
                                        </span>
                                        
                                    </Link>
                                )
                            })}

                            <div
                            className={`
                            flex-col
                            justify-center
                            border-blue-400
                            text-blue-400
                            bg-white
                            sm:hover:bg-blue-50
                            select-none
                            font-bold
                            cursor-pointer
                            items-center
                            rounded-2xl
                            border-[2px]
                            border-b-[4px]
                            flex
                            text-[2rem]
                            p-4
                            `}>
                                <span>
                                    <BsPlusLg/>
                                </span>
                            </div>
                        </div>

                    </div>
                    
                </div>

            </>
        }/>

        <Route path="/:unit/*" element={
        <Unit 
        data={course.units}
        updateCourse={({unit , data}) => {
            updateCourse({
                type : "updateUnit",
                payload : {
                    unit,
                    data
                }
            })
        }}/>
        } />

        <Route path="/new" element={<p>New</p>} />
    </Routes>
  )
}

export default Course