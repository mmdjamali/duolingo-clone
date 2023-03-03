import Preact from 'preact'
import {useState , useEffect} from 'preact/hooks'

type props = {
  delay : number,
  children : Preact.ComponentChildren,
}

const ComponentWithDelay : Preact.FunctionComponent<props> = ({
  delay , children
}) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    let timeout = setTimeout(() => {
      setShow(true)
    },delay)
  },[delay,children])

  return (
      <>
      {show && children}
      </>
  )
}

export default ComponentWithDelay