import {BrowserRouter, Routes, Route} from "react-router";
import HomeLayout from "./pages/HomeLayout/HomeLayout.tsx";
import Home from "./pages/Home.tsx";
import User from "./pages/User.tsx";
import Content from "./pages/Content.tsx";


function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout/>}>
            <Route  index element={<Home/>}/>
            <Route path="/user" element={<User/>}/>
            <Route  path="/content" element={<Content/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
