import Preact from 'preact';
import Button from '../../../../components/buttons/Button';
import { TiArrowLeftThick } from 'react-icons/ti';
import { useNavigate } from 'react-router';
import { useState } from 'preact/hooks';
import SelectLessonType from '../inputs/SelectLessonType';

const Lesson = () => {
    const navigate = useNavigate()
    const [lessonType , setLessonType] = useState<string>("lesson")
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
                    
                }}
                disabled={true}
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
            <div>
                <span>
                    Type :
                </span>

                <div
                className={`
                max-w-[200px]
                `}>
                    <SelectLessonType
                    value={lessonType}
                    setValue={(data) => {
                        setLessonType(data)
                    }}
                    />
                </div>
            </div>
        </div>
    </>
  )
}

export default Lesson