import { userLogin } from "../queryFunctions";
import { method } from "../type";

type ContentData = {
    id: number,
    title: string,
    url: string,
    text: string,
    queryName: string,
    method: method,
    apiCall: () => unknown
}

export const contentData: ContentData[] = [
//     {
//         id: 5,
//         title: "Get all notes",
//         url: "/v1/getallnotes",
//         method: "GET",
//         queryName: "getAllNotes",
//         text: "This endpoint returns all notes from the database without authentication."
//     },
//     {
//         id: 1,
//         title: "Create a new note",
//         url: "/v1/demonote/create",
//         method: "POST",
//         queryName: "createNote",
//         text: "This endpoint allows authenticated users to create a new note."
//     },
//     {
//         id: 2,
//         title: "Delete a note",
//         url: "/v1/deletepost/id",
//         method: "POST",
//         queryName: "deleteNote",
//         text: "This endpoint allows authenticated users to delete a specific note by its ID."
//     },
//     {
//         id: 3,
//         title: "Update a note",
//         url: "/v1/updatenote/id",
//         method: "POST",
//         queryName: "updateNote",
//         text: "This endpoint allows authenticated users to update a specific note by its ID."
//     },
//     {
//         id: 4,
//         title: "Get notes by user ID",
//         url: "/v1/seeusernotes/id",
//         method: "GET",
//         queryName: "seeAllNotesByUserId",
//         text: "This endpoint returns all notes created by a specific user, requiring authentication."
//     },

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

export const userContentData: ContentData[] = [
    // {
    //     id: 1,
    //     title: "User Signup",
    //     url: "axios.post('https://fake-data-api-ivory.vercel.app/v1/signup', {username: <add your username>, fullname:  <add your username>, password: <add your 8 digit or greater then 8 password>})",
    //     method: "POST",
    //     queryName: "registerUser",
    //     text: "This endpoint allows new users to register by providing their details.",
    //     apiCall: 
    // },
    {
        id: 2,
        title: "User Login",
        url: "axios.post('https://fake-data-api-ivory.vercel.app/v1/signin', {identifier: <add your username or email>, password: <enter your password>}, {withCreadentionals:  true})",
        method: "POST",
        queryName: "loginUser",
        text: "This endpoint allows registered users to log in and receive authentication tokens.",
        apiCall: userLogin
    },
    // {
    //     id: 3,
    //     title: "User Logout",
    //     url: "axios.get('https://fake-data-api-ivory.vercel.app/v1/logout')",
    //     method: "GET",
    //     queryName: "logOut",
    //     text: "This endpoint logs out an authenticated user by clearing the session or token."
    // },
    // {
    //     id: 4,
    //     title: "Update User Profile",
    //     url: "axios.post('https://fake-data-api-ivory.vercel.app/v1/updateprofile')",
    //     method: "POST",
    //     queryName: "updateUser",
    //     text: "This endpoint allows authenticated users to update their profile details."
    // },
    // {
    //     id: 5,
    //     title: "Change User Password",
    //     url: "axios.post('https://fake-data-api-ivory.vercel.app/v1/changepassword')",
    //     method: "POST",
    //     queryName: "changeUserPassword",
    //     text: "This endpoint allows authenticated users to change their password securely."
    // },
    // {
    //     id: 6,
    //     title: "Get User Data",
    //     url: "axios.get('https://fake-data-api-ivory.vercel.app/v1/getuser')",
    //     method: "GET",
    //     queryName: "getUserData",
    //     text: "This endpoint retrieves details of the authenticated user."
    // }
];
