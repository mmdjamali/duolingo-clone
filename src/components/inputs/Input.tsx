import Preact from 'preact'

type props = {
    value : string,
    setValue : (data : string | null) => void,
    type : string,
}

const Input : Preact.FunctionComponent<props> = ({
    setValue,
    type,
    value
}) => {
  return (
    <input
    value={value}
    onChange={(e : any) => {
        if(!e.target) return
        let target = e.target
        setValue(target?.value)
    }}
    className={`
    px-[10px]
    py-[8px]
    font-light
    text-[19px]
    bg-neutral-100
    border-[2px]
    rounded-2xl
    w-full
    focus:outline-none
    `}
    type={type}>

    </input>
  )
}

export default Input