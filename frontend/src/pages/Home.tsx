import {NavLink} from "react-router";

const Home = () => {
    
    return (
        <div className="h-full w-full relative">
            <div className="w-full max-w-screen relative h-full">
                <div className="child-box  flex flex-col gap-2">
                    <div className="w-full overflow-hidden ">
                        <h1 className="title">
                            <NavLink to="">Fake CURD Backend Provider</NavLink>
                        </h1>
                    </div>
                    <div className="w-full overflow-hidden">
                        <h4 className="sub-txt">
                            Hey there! 🙋🏻‍♂️ This is a simple CRUD REST API with a built-in backend, designed to reduce development time by <strong>50%</strong> for <strong>CRUD-based projects</strong>. It helps frontend engineers efficiently manage APIs in web applications and web pages while enhancing their understanding of API interactions.
                        </h4>
                    </div>
                    <div className="w-full relative  bg-code-box px-3 py-2 overflow-hidden rounded-lg">
                        <p className="text-lg font-[600] ">🟢Build with</p>
                        <div className="h-10 w-full rounded-lg px-2 relative">
                            <ul className="flex items-center justify-between  relative build-ul mt-2">
                                <li>🐶Express JS.</li>
                                <li>🐶Mongodb</li>
                                <li>🐶Mongoose</li>
                                <li>🐶JWT</li>
                                <li>🐶BcryptJS</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="child-box  flex flex-col items-center gap-2">
                    <div className="w-full overflow-hidden">
                        <h1 className="text-2xl font-base font-bold">Why we use this:</h1>
                    </div>
                    <ul className="w-full overview-ul list-disc ">
                        <li> 🔵It reduces 50% development time of simple curd applications.</li>
                        <li> 🔴Provides a basic overview of REST APIs.</li>
                        <li> 🟢Shows an overview of HTTP methods like GET,POST,UPDATE and DELETE.</li>
                        <li> 🟠Motivates new web developers to learn about backend.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Home
