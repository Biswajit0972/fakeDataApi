import { createContext, useState,ReactNode } from "react"

interface MobileContextProps { 
  isOpened: boolean
  setIsOpened: (isOpened: boolean) => void
}

export const NavContext = createContext<MobileContextProps | null>(null)

const MobileContext = ({children}: {children: ReactNode}) => {
  const [isOpened, setIsOpened] =  useState<boolean>(false);
  const mbValue = {isOpened, setIsOpened};
  return (
    <NavContext.Provider value={mbValue}>
      {children}
    </NavContext.Provider>
  )
}

export default MobileContext