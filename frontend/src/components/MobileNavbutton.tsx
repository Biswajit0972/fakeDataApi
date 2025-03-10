
import { CiMenuBurger } from "react-icons/ci";
import { GiTireIronCross } from "react-icons/gi";
import useMobilenav from "../hooks/MobileNavHook";

const MobileNavbutton = () => {
    const {isOpened, setIsOpened} = useMobilenav();
    return (
        <button className="relative w-20 overflow-hidden h-full flex-center text-3xl cursor-pointer hover:bg-[rgba(155,155,155,0.5)] rounded-lg transition duration-200 ease-in-out" onClick={() => setIsOpened(!isOpened)}>
          <h1>
              {
                  isOpened ? <GiTireIronCross/> : <CiMenuBurger/>
              }
          </h1>
        </button>
    )
}
export default MobileNavbutton
