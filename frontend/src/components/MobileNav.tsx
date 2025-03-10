import {useState} from "react";
import {NavLink} from "react-router";

const MobileNav = () => {

    const [mobileNav, ] = useState<boolean>(true);

    return (
        <div className={`${mobileNav? "right-3.5" : "right-[100%]"} mobile-nav transition duration-200 ease-in-out`}>
            <nav className="overflow-hidden w-full">
                <ul className="relative w-full text-16 mobile-nav-ul">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li><li>
                        <NavLink to="/user">User</NavLink>
                    </li>
                    <li>
                        <NavLink to="/content">Content</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default MobileNav
