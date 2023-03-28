import { useLocation } from "react-router"
import Navbar from "./navbar"
import NavbarDB from "./database-side-navbar"


export default ({

}) => {
    const location = useLocation()

    if(location.pathname.startsWith("/database")) return <NavbarDB/>

    return <Navbar/>
}

