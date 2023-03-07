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
        src={'/public/flags/English.svg'}
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
        src={'/public/flags/Spanish.svg'}
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
        src={'/public/flags/French.svg'}
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
        src={'/public/flags/Persian.svg'}
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
        src={'/public/flags/Azerbaijani.svg'}
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
        src={'/public/flags/Blank.svg'}
        className={className}
        />
    )
}

export const flags : {[n : string] : FunctionComponent<props>} = {
    "en" : English,
    "es" : Spanish,
    "fr" : French,
    "fa" : Persian,
    "az" : Azerbaijani,
    "blank" : Blank,
}