import { useState } from "react";
import { NavLink } from "react-router";
import useMobilenav from "../hooks/MobileNavHook";
import { NavUrl } from "../utils";

const MobileNav = () => {
  const [mobileNav] = useState<boolean>(true);
  const { setIsOpened } = useMobilenav();
  return (
    <div
      className={`${
        mobileNav ? "right-3.5" : "right-[100%]"
      } mobile-nav transition duration-200 ease-in-out`}
    >
      <nav className="overflow-hidden w-full">
        <ul className="relative w-full text-16 mobile-nav-ul">
          {NavUrl.map(({ url, name }) => (
            <NavLink to={url} key={name} onClick={() => setIsOpened(false)}>
              <li>{name}</li>
            </NavLink>
          ))}
        </ul>
      </nav>
    </div>
  );
};
export default MobileNav;
