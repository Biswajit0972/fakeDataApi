import Navbar from "../../components/Navbar.tsx";
import {Outlet} from "react-router";
import useMobilenav from "../../hooks/MobileNavHook.ts";
import MobileNav from "../../components/MobileNav.tsx";


const HomeLayout = () => {
    const {isOpened} = useMobilenav();
    return ( 
        <div className="w-full max-w-screen relative h-screen grid grid-rows-11 grid-cols-1 gap-1 p-2 md:px-7 lg:px-12">
            <header className="h-full w-full relative bg-[rgba(155,155,155,0.4)] flex-center">
                <Navbar/>
            </header>
            <main
                className="h-full w-full relative  row-span-11 overflow-x-hidden bg-[rgba(155,155,155,0.4)] rounded-md px-2 py-1">
                <Outlet/>
            </main>
            {
                isOpened && <MobileNav/>
            }
        </div>
    )
}
export default HomeLayout
