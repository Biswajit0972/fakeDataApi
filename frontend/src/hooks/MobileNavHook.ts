import { useContext } from "react"
import { NavContext } from "../context/MobileContext"

const useMobilenav = () => {
    const value = useContext(NavContext);
  
    if (!value) {
        throw new Error("useMobilenav must be used within a MobileContextProvider")
    }
    return value;
}

export default useMobilenav;