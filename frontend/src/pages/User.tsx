import ApiResponse from "../components/ApiResponse";
import { userContentData } from "../utils";

const User = () => {
  return (
    <div className="h-full w-full relative overflow-x-hidden ">
      <div className=" w-full flex flex-col items-center  gap-3">
        {
            userContentData.map(({id, method,  url,text, apiCall})  => <ApiResponse key={id}  method={method} url={url} text={text}  apicall={apiCall} />)
        }
      </div>
    </div>
  );
};
export default User;
{/*  */}