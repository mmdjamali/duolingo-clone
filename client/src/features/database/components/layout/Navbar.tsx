import Preact from 'preact'
import {MdLanguage} from "react-icons/md";
import { RiUser3Line } from "react-icons/ri";
import NavButton from './NavButton';

const DBNavbar = () => {
  return (
    <nav
    className={`
    flex
    flex-col
    min-h-[100vh]
    p-4
    gap-2
    border-r-[2px]
    `}>

        <span
        className={`
        text-green-500
        uppercase
        font-bold
        text-[2rem]
        py-4
        `}>
            Database
        </span>

        {
            sections.map((item, idx) => {
                return(
                    <NavButton
                    Icon={item.icon}
                    title={item.title}
                    url={item.url}
                    selected={location.pathname === item.url}
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
        title : "languages",
        icon : MdLanguage,
        url : "/database/languages",
    },
    {
        title : "users",
        icon : RiUser3Line,
        url : "/database/users",
    }
]