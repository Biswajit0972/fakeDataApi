import axios from "axios";

export const asyncHandler = (fn: () => Promise<unknown>) => async () => {
    try {
        return await fn();
    } catch (error) {

        if (axios.isAxiosError(error)) {
            console.error("Backend Error:", error.response?.data || error.message);
            return error.response?.data;
        } else {
            console.error("Unexpected Error:", error);
            return { message: "Something went wrong!" };
        }
    }
}