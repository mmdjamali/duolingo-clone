import { FunctionComponent } from "preact"

type props = {
    className : string,
    onClick ?: () => void
}

export const Home : FunctionComponent<props> = ({
    className,
    onClick
}) => {
    return(
        <img
        onClick={onClick}
        src={'/icons/home.svg'}
        className={className}
        />
    )
}