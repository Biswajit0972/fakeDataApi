import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "./query.ts";
import {ReactNode} from "react";

const QueryContext = ({children}: { children: ReactNode }) => {
    return (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
}
export default QueryContext
