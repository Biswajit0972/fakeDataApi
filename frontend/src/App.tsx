import {BrowserRouter, Route, Routes} from "react-router";
import HomeLayout from "./pages/HomeLayout/HomeLayout.tsx";
import Home from "./pages/Home.tsx";
import User from "./pages/User.tsx";
import Content from "./pages/Content.tsx";
import {Slide, ToastContainer} from "react-toastify";


function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomeLayout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="/user" element={<User/>}/>
                        <Route path="/content" element={<Content/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Slide}
            />
        </>
    )
}

export default App
