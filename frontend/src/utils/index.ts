import { deleteNotebyId, updateNotebyId} from "../queryFunctions";

import { method } from "../type";
import {
    useCreateUser,
    useUserLogin,
    useLogout,
    useUpdateUser,
    useChangePassword,
    useGetUserProfile,
    useGetUserById, useGetAllContent, useCreateContent, useGetALlContentByUserId
} from "../hooks/customQueryHooks";
import { UseMutateFunction } from "@tanstack/react-query";


type ContentData = {
    id: number,
    title: string,
    url: string,
    text: string,
    queryName: string,
    method: method,
    apiCall: () => unknown
}


export type CustomMutationHook<TData = unknown, TVariables = void> = {
    mutateAsync: UseMutateFunction<TData, Error, TVariables>;
    isPending: boolean;
    data?: TData;
};

type ContentData2 = {
    id: number,
    title: string,
    url: string,
    text: string,
    queryName: string,
    method: method,
    useApiCall: () => CustomMutationHook
}



export const contentData: ContentData[] = [
    {
        id: 5,
        title: "Get all notes",
        url: "axios.get(`https://fake-data-api-backend.vercel.app/v1/getallnotes?page=1&limit=10}`)",
        method: "GET",
        queryName: "getAllNotes",
        text: "This endpoint returns all notes from the database without authentication.",
        apiCall: useGetAllContent,
    },
    {
        id: 1,
        title: "Create a new note",
        url: "await axios.post(`https://fake-data-api-backend.vercel.app/v1/demonote/create`, {content: `hey you store new  data here ${Date.now()}`}, {    headers: {\n" +
            "Authorization: `Bearer ${token}`,\n}});",
        method: "POST",
        queryName: "createNote",
        text: "This endpoint allows authenticated users to create a new note.",
        apiCall: useCreateContent,
    },
    {
        id: 2,
        title: "Delete a note",
        url: "axios.delete(`https://fake-data-api-backend.vercel.app/v1/deletepost?id=<add post id>`,  { headers:{Authorization: `Bearer ${token}`} })",
        method: "POST",
        queryName: "deleteNote",
        text: "This endpoint allows authenticated users to delete a specific note by its ID.",
        apiCall: deleteNotebyId
    },
    {
        id: 3,
        title: "Update a note",
        url: "axios.update(`https://fake-data-api-backend.vercel.app/v1/updatenote?id=<add note id>`,  { headers:{Authorization: `Bearer ${token}`} })",
        method: "POST",
        queryName: "updateNote",
        text: "This endpoint allows authenticated users to update a specific note by its ID.",
        apiCall: updateNotebyId,
    },
    {
        id: 4,
        title: "Get notes by user ID",
        url: "axios.update(`https://fake-data-api-backend.vercel.app/v1/updatenote?id=<add user id>`, { headers:{Authorization: `Bearer ${token}`} })",
        method: "GET",
        queryName: "seeAllNotesByUserId",
        text: "This endpoint returns all notes created by a specific user, requiring authentication.",
        apiCall: useGetALlContentByUserId,
    },

];

interface Nav {
    url: string;
    name: string;
}

export const NavUrl: Nav[] = [
    {
        url: "/",
        name: "Home"
    },
    {
        url: "/user",
        name: "User"
    }, {
        url: "/content",
        name: "Content"
    }
]

export const userContentData: ContentData2[] = [
    {
        id: 1,
        title: "User Signup",
        url: "axios.post('https://fake-data-api-backend.vercel.app/v1/signup', {username: <add your username>, fullname:  <add your username>, password: <add your 8 digit or greater then 8 password>, gmail: <add your gmail>})",
        method: "POST",
        queryName: "registerUser",
        text: "This endpoint allows new users to register by providing their details.",
        useApiCall: useCreateUser,
    },
    {
        id: 2,
        title: "User Login",
        url: "axios.post('https://fake-data-api-backend.vercel.app/v1/signin', {identifier: <add your username or email>, password: <enter your password>}, { headers:{Authorization: `Bearer ${token}`})",
        method: "POST",
        queryName: "loginUser",
        text: "This endpoint allows registered users to log in and receive authentication tokens.",
        useApiCall: useUserLogin,
    },
    {
        id: 3,
        title: "User Logout",
        url: "axios.get('https://fake-data-api-backend.vercel.app/logout', { headers:{Authorization: `Bearer ${token}`})",
        method: "GET",
        queryName: "logOut",
        text: "This endpoint logs out an authenticated user by clearing the session or token.",
        useApiCall: useLogout,
    },
    {
        id: 4,
        title: "Update User Profile",
        url: "axios.post('https://fake-data-api-backend.vercel.app/v1/updateprofile', {fullname: `roni`,username:  `ronit45`,}, { headers:{Authorization: `Bearer ${token}`})",
        method: "POST",
        queryName: "updateUser",
        text: "This endpoint allows authenticated users to update their profile details.",
        useApiCall: useUpdateUser,
    },
    {
        id: 5,
        title: "Change User Password",
        url: "axios.post('http://localhost:3000/v1/changepassword', { headers:{Authorization: `Bearer ${token}`})",
        method: "POST",
        queryName: "changeUserPassword",
        text: "This endpoint allows authenticated users to change their password securely.",
        useApiCall: useChangePassword,
    },
    {
        id: 6,
        title: "Get User Data",
        url: "axios.get('https://fake-data-api-backend.vercel.app/v1/getuser', { headers:{Authorization: `Bearer ${token}`})",
        method: "GET",
        queryName: "getUserData",
        text: "This endpoint retrieves details of the authenticated user.",
        useApiCall: useGetUserProfile,
    },
    {
        id: 7,
        title: "Get User by id",
        url: "axios.get('https://fake-data-api-backend.vercel.app/v1/getuser?id=<add userid>')",
        method: "GET",
        queryName: "getUserData",
        text: "This endpoint retrieves details of the authenticated user.",
        useApiCall: useGetUserById,
    }
];
