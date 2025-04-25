import {AxiosError} from "axios";

export const asyncHandler = (fn: () => Promise<unknown>) => async () => {
    try {
        return await fn();
    } catch (error) {
        const err = error as AxiosError;
        throw err.response || err.message;
    }
}