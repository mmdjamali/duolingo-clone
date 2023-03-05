import Preact from 'preact'
import { useEffect , useState } from 'preact/hooks'

type props = {
    number : number,
    duration : number
}

function TimerUp({
    number,
    duration
} : props) {
    let fps = 60;
    const [count , setCount] = useState<number>(0)

    useEffect(() => {
    let x = duration / fps
    let increment = number / fps;

    let times = 0;

    let interval = setInterval(() => {
        if(times >= fps) {
            clearInterval(interval)
            return
        }
        setCount(prev => prev + increment)
        times += 1
    },x)

    return () => {
        clearInterval(interval)
    }
  }, [])
  

  return (
    <span
    className={`
    `}>
        {(() => {
            let minutes = Math.round(count / 60)
            let seconds = Math.round(count - (minutes * 60))

            return(
                <>
                <span>
                    {minutes < 10 ? "0" : ""}
                    {minutes}
                </span>
                :
                <span>
                    {seconds < 10 ? "0" : ""}
                    {seconds >= 0 ? seconds : "0"}
                </span>

                </>
            )
        })()}
    </span>
  )
}

export default TimerUp