import Preact from 'preact'

type props = {
    value : string,
    onClick : () => void,
    exists : boolean,
    outlined? : boolean
}

export default ({
    value,
    onClick,
    exists,
    outlined = true
} : props ) => {
  return (
        <div
        className={`
        ${exists ? "bg-neutral-200" : ""}
        relative
        grid
        items-end
        h-[46px]
        rounded-2xl
        `}>
            <button
            onClick={() => {
                if(exists)return

                onClick()
            }}
            className={`
            select-none
            ${exists ? "opacity-0 pointer-events-none" : ""}
            flex
            items-center
            justify-center
            flex-shrink-0
            rounded-2xl
            transition-all
            duration-75
            ${outlined ? "border-[2px] active:border-b-[2px]" : "active:border-b-[0]"}
            text-[1rem]
            font-light
            tracking-[1px]
            py-2
            px-2
            border-b-[4px]
            text-neutral-700
            border-neutral-200
            bg-white
            `}>
               {value} 
            </button>
        </div>
  )
}
