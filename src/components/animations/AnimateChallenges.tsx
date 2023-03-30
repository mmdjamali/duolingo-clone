import Preact from 'preact'
import {useState , useEffect , useRef} from 'preact/hooks'

type props = {
    children  : Preact.ComponentChildren,
    question : questionType,
}

type questionType = {
    type : "TranslateWithButtons" | "selectCorrectOption",
    sentence : sentenceType[],
    meaning : string,
    options : string[],
    id : string,
}

type sentenceType = {
    word : string,
    meaning : string,
    blank ?: boolean
}

const AnimateChallenges : Preact.FunctionComponent<props> = ({
    children,
    question
}) => {

    const { elements , key} = useAnimateChallenges(children,question)
    
    return (
    <div
    key={7}
    className={`
    relative
    flex
    min-w-full
    h-fit
    overflow-x-hidden
    `}>
        {elements?.map((item , idx , array) => {
            if(array.length === 1){
                return(
                <div
                key={idx}
                className={`
                relative
                flex-shrink-0
                w-full
                flex
                `}>
                    {item}
                </div>
                )
            }
            return(
                <div
                key={(key * (idx + 1))}
                className={`
                relative
                flex-shrink-0
                w-full
                flex
                ${idx === 0 ? "animate-slide-left-fade-out" : "animate-slide-left-fade-in"}
                `}>
                    {item}
                </div>
            )

        })}
    </div>
  )
}

export default AnimateChallenges

const useAnimateChallenges = (children : Preact.ComponentChildren , question : questionType) => {
    const [state, setState] = useState<{elements : Preact.ComponentChildren[] | [],key : number}>({
        elements : [],
        key : new Date(Date.now()).getTime()
    })

    useEffect(() => {
        if(state.elements.length === 0){
            setState({
                elements : [children],
                key : new Date(Date.now()).getTime()
            })
            return
        }
        if(state.elements.length === 1){
            setState(prev => {return{
                elements : [...prev.elements,children],
                key : new Date(Date.now()).getTime()
            }})
            return
        }
        setState(prev => {return{
            elements : [prev.elements[1],children],
            key : new Date(Date.now()).getTime()
        }})
    },[question])
    
    return state
}