import Preact from 'preact'
import { useEffect , useState } from 'preact/hooks'

type props = {
    number : number,
    duration : number
}

function NumberUp({
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
        {Math.round(count)}
    </span>
  )
}

export default NumberUp