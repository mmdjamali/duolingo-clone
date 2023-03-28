import {MdLanguage} from "react-icons/md";
import { RiUser3Line } from "react-icons/ri";
import NavButton from '../primitives/buttons/navigation-button';
import { useLocation } from 'react-router';
import { Home } from "../../media/svg/icons";

export default () => {  
    const location = useLocation()  
  return (
    <nav
    className={`
    sticky
    top-0
    left-0
    flex
    flex-col
    min-h-screen
    max-h-screen
    p-4
    gap-2
    border-x-[2px]
    `}>

        <span
        className={`
        hidden
        xl:inline
        text-green-500
        uppercase
        font-bold
        text-[2rem]
        py-4
        `}>
            Database
        </span>

        <span
        className={`
        text-center
        inline
        xl:hidden
        text-green-500
        uppercase
        font-bold
        text-[2rem]
        py-4
        `}>
            db
        </span>

        {
            sections.map((item, idx) => {
                console.log(location.pathname)
                return(
                    <NavButton
                    key={idx}
                    Icon={item.icon}
                    title={item.title}
                    url={item.url}
                    selected={location.pathname.startsWith(item.url)}
                    />
                )
            })
        }

    </nav>
  )
}
const sections = [
    {
        title : "home",
        icon : Home,
        url : "/learn",
    },
    {
        title : "profile",
        icon : Home,
        url : "/profile",
    },
    {
        title : "setting",
        icon : Home,
        url : "/setting",
    }
]