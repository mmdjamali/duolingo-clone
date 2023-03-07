import Preact from 'preact'
import {MdLanguage} from "react-icons/md";
import { RiUser3Line } from "react-icons/ri";
import NavButton from './NavButton';
import { useLocation } from 'react-router';

const DBNavbar = () => {
    const location = useLocation()
    
  return (
    <nav
    className={`
    sticky
    top-0
    left-0
    flex
    flex-col
    min-h-[100vh]
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
                return(
                    <NavButton
                    Icon={item.icon}
                    title={item.title}
                    url={item.url}
                    selected={location.pathname.includes(item.url)}
                    />
                )
            })
        }

    </nav>
  )
}

export default DBNavbar

const sections = [
    {
        title : "courses",
        icon : MdLanguage,
        url : "/database/courses",
    },
    {
        title : "users",
        icon : RiUser3Line,
        url : "/database/users",
    }
]