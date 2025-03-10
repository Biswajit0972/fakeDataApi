import ApiResponse from "../components/ApiResponse";
import { contentData } from "../utils";

const Content =  () => {
   
    return (
        <div className="h-full w-full relative overflow-x-hidden ">
            <div className=" w-full flex flex-col items-center  gap-3">
                {contentData.map((data) => (
                    <ApiResponse key={data.id} method={data.method} url={`https://backend-service-two.vercel.app${data.url}`} text={data.text}/>
                ))}
            </div>
        </div>
    )
}
export default Content;
