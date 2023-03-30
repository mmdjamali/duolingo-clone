import Preact from "preact"

type props = {
    children : Preact.ComponentChildren
}

const Question : Preact.FunctionComponent<props> = ({
    children
}) => {
    return(
        <div
        className={`
        self-center
        flex
        items-center
        justify-center
        `}>

            <span
            className={`
            flex-shrink-0
            relative
            w-[12px]
            h-[12px]
            border-b-[2px]
            border-l-[2px]
            rotate-45
            translate-x-[3px]
            z-[10]
            `}
            >
                <span
                className={`
                top-0
                right-0
                absolute
                w-[10px]
                h-[10px]
                bg-white
                `}
                />
            </span>

            <div
            className={`
            flex
            flex-wrap
            -translate-x-[4px]
            rounded-2xl
            bg-white
            border-[2px]
            p-4
            text-[1.2rem]
            font-light
            text-neutral-700
            gap-1
            `}>
                {children}
            </div>

        </div>
    )
}

export default Question