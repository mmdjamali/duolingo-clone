import Preact from 'preact'
import {TiArrowLeftThick} from "react-icons/ti"
import { useNavigate } from 'react-router'
import Button from '../../../../components/buttons/Button'
import Input from '../../../../components/inputs/Input'
import SelectLanguage from '../inputs/SelectLanguage'
import { useReducer } from 'preact/hooks'
const Course = () => {
    const [course , updateCourse] = useReducer<any,any>((prev : any , action : any) => {
        switch(action.type){
            case "updateLanguage" : 
                return {
                    ...prev,
                    language : {
                        name : action.payload.name,
                        code : action.payload.code || "",
                    }
                }
            case "updateLearn" : 
                return {
                    ...prev,
                    learn : {
                        name : action.payload.name,
                        code : action.payload.code || "",
                    }
                }
        }
    },
    {
        learn : {
            name : "",
            code : ""
        },
        language : {
            name : "",
            code : ""
        }
    })
    const navigate = useNavigate()

  return (
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
        h-full
        w-full
        gap-3
        `}>

            <div
            className={`
            w-full
            flex
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
            
        </div>

    </>
  )
}

export default Course