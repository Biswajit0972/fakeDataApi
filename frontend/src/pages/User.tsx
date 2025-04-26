import ApiResponse from "../components/ApiResponse";
import {userContentData} from "../utils";

const User = () => {
  return (
    <div className="h-full w-full relative overflow-x-hidden ">
      <div className=" w-full flex flex-col items-center  gap-3">
        {
            userContentData.map(({id, method,  url, queryName, text, useApiCall})  => <ApiResponse key={id} queryName={queryName} method={method} url={url} text={text} useApiCall={useApiCall} />)
        }
      </div>
    </div>
  );
};
export default User;
{/*  */}