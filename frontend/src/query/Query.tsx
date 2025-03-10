import { QueryClient,  QueryClientProvider } from "@tanstack/react-query"
import { ReactNode } from "react";


const CustomClient = new QueryClient({
    defaultOptions:{
        queries: {
           staleTime: 2 * 60 * 1000,
        }
    }
});


const Query = ({children} : {children: ReactNode}) => {
  return (
    <QueryClientProvider client={CustomClient}>
        {children}
    </QueryClientProvider>
  )
}

export default Query