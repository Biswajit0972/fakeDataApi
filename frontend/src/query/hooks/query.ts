import { useQuery } from "@tanstack/react-query"
import { getAllData } from "../queryFunctions"

export const useGetContentHook = ({url}: {url:string}) => {
    return useQuery({
        queryKey: ["getAllContent"],
        queryFn: () => getAllData(url)
    })
}