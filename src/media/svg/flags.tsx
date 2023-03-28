import { FunctionComponent } from "preact"

type props = {
    className : string,
    onClick ?: () => void
}

const English : FunctionComponent<props> = ({
    className,
    onClick
}) => {
    return(
        <img
        onClick={onClick}
        src={'/flags/English.svg'}
        className={className}
        />
    )
}

const Spanish : FunctionComponent<props> = ({
    className,
    onClick
}) => {
    return(
        <img
        onClick={onClick}
        src={'/flags/Spanish.svg'}
        className={className}
        />
    )
}

const French : FunctionComponent<props> = ({
    className,
    onClick
}) => {
    return(
        <img
        onClick={onClick}
        src={'/flags/French.svg'}
        className={className}
        />
    )
}

const Persian : FunctionComponent<props> = ({
    className,
    onClick
}) => {
    return(
        <img
        onClick={onClick}
        src={'/flags/Persian.svg'}
        className={className}
        />
    )
}

const Azerbaijani : FunctionComponent<props> = ({
    className,
    onClick
}) => {
    return(
        <img
        onClick={onClick}
        src={'/flags/Azerbaijani.svg'}
        className={className}
        />
    )
}

const Blank : FunctionComponent<props> = ({
    className,
    onClick
}) => {
    return(
        <img
        onClick={onClick}
        src={'/flags/Blank.svg'}
        className={className}
        />
    )
}

const flags : {[n : string] : FunctionComponent<props>} = {
    "en" : English,
    "es" : Spanish,
    "fr" : French,
    "fa" : Persian,
    "az" : Azerbaijani,
    "blank" : Blank,
}

export default flags