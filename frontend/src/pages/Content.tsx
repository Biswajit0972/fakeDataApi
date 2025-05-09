import ApiResponse from "../components/ApiResponse";
import { contentData } from "../utils";

const Content =  () => {
   
    return (
        <div className="h-full w-full relative overflow-x-hidden ">
            <div className=" w-full flex flex-col items-center  gap-3">
                {contentData.map(({id, url,  method,  text, apiCall, queryName}) => (
                   <ApiResponse key={id} method={method} url={url}  text={text} useApiCall={apiCall} queryName={queryName}/>
                ))}
            </div>
        </div>
    )
}
export default Content;
