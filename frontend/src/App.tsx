import {BrowserRouter, Routes, Route} from "react-router";
import HomeLayout from "./pages/HomeLayout/HomeLayout.tsx";
import Home from "./pages/Home.tsx";
import User from "./pages/User.tsx";
import Content from "./pages/Content.tsx";
import { useEffect } from "react";
import { userLogin } from "./query/queryFunctions/index.ts";

function App() {
  useEffect(() => {
    const fakeLogin = async () => {
      const res = await  userLogin("http://fake-data-api-ivory.vercel.app/v1/signin", {identifier: "v234", password: "12345678"});
      console.log(res);
    }
    fakeLogin();
  }, []);

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
