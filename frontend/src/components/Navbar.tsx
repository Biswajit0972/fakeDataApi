import DesktopNav from "./DesktopNav.tsx";
import MobileNavbutton from "./MobileNavbutton.tsx";

const Navbar = () => {
  return (
    <div className="h-full w-full overflow-hidden relative flex items-center justify-between px-1">
      <div className="logo flex items-center justify-between">
        <h1 className="font-base text-xl font-extrabold">🔴PlayApi🟢</h1>
      </div>
      <div className="h-full relative p-2 md:hidden">
        <MobileNavbutton />
      </div>
      <div className="hidden md:block">
          <DesktopNav/>
      </div>
    </div>
  );
};
export default Navbar;
