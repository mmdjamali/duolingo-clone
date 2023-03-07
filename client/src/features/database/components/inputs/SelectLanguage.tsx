import Preact from 'preact'
import { flags } from '../../../../utils/Flags'
import { useState } from 'preact/hooks'

type props = {
    value : string,
    setValue : (data : any | null) => void,
    type : string,
}

const SelectLanguage : Preact.FunctionComponent<props> = ({
    setValue,
    type,
    value
}) => {
    const [showFlags , setShowFlags] = useState<boolean>(false)
  
    return (
    <div
    className={`
    flex
    items-center
    px-[10px]
    py-[8px]
    font-light
    text-[19px]
    bg-neutral-100
    border-[2px]
    rounded-2xl
    w-full
    gap-2.5
    `}>

        <div
        className={`
        flex-shrink-0
        relative
        flex
        flex-col
        `}>
            {
            (() => {
                const Component = flags[list[value?.toLocaleLowerCase()]] || flags["blank"]
                if(Component)
                return(
                    <Component
                    onClick={() => {
                        setShowFlags(true)
                    }}
                    className='
                    z-[5]
                    w-[32px]
                    flex-shrink-0
                    cursor-pointer
                    '
                    />
                )
            })()
            }

            <div
            className={`
            transition-all
            duration-200
            ${showFlags ? "max-h-[100px] border-[2px]" : "max-h-[0px]"}
            absolute
            z-[10]
            bg-neutral-100
            rounded-lg
            overflow-auto
            `}>

                {Object.entries(flags).map((item) => {
                    const Component = item[1] 
                    return(
                        <Component
                        onClick={() => {
                            if(item[0] === "blank") {
                                setValue({
                                    name : "",
                                    code : ""
                                })
                                setShowFlags(false)
                                return
                            }
                            setValue({
                                name : Object.entries(list).filter((i) => i[1] === item[0])[0][0],
                                code : item[0]
                            })
                            setShowFlags(false)
                        }}
                        className='
                        min-w-[32px]
                        cursor-pointer
                        '/>
                    )
                })}

            </div>
        </div>

        <input
        onFocus={() => {
            if(showFlags)
            setShowFlags(false)
        }}
        className={`
        w-full
        font-light
        text-[19px]
        bg-transparent
        focus:outline-none
        `}
        value={value}
        onChange={(e : any) => {
            let v = e.target.value
            setValue({
                name : v,
                code : list[v] || ""
            })
        }}
        />
    </div>
  )
}

export default SelectLanguage

const list :{
    [language : string] : string
}= {
    "persian" : "fa",
    "english" : "en",
    "azerbaijani" : "az",
    "spanish" : "es",
    "french" : "fr",
}