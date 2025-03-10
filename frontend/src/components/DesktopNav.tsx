import { NavLink, useLocation } from "react-router"
import { NavUrl } from "../utils";

const DesktopNav = () => {
   const {pathname} = useLocation()
  return (
    <nav className="overflow-hidden w-full pr-1">
    <ul className="relative w-full text-16 flex items-center gap-2 ">
       {
        NavUrl.map((item) => <li key={item.url} className={`${pathname === item.url ? 'bg-blue-500' : 'bg-blue-400'} text-white px-2 py-1 rounded-md`}>  
        <NavLink  to={item.url}>{item.name}</NavLink>
        </li>)
       }
    </ul>
</nav>
  )
}

export default DesktopNav