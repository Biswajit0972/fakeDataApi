export type method = "GET" | "POST" | "PUT" | "DELETE" | "UPDATE";

export interface ApiResponseProps {
    method: method;
    url: string;
    text:  string;
    useApiCall: () => unknown
}

export interface contentData {
    id: string,
    userId: string,
    content: string,
    createdAt: string,
    updatedAt: string,
}


export interface contentAllResponse {
    statusCode:  string | number;
    message: string;
    data: contentData[] | unknown;
    flag: boolean;
}

export interface User {
    _id: string;
    fullname: string;
    username: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    profile: string;
}

export interface LoginResponse {
    statusCode: number;
    message: string;
    data: {
        user: User;
        accessToken: string;
    };
}

export interface loginPayload {
    identifier: string;
    password: string;
}