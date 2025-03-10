import { method } from "../type";
type ContentData = {
    id: number,
    title: string,
    url: string,
    text: string,
    queryName: string,
    method: method,
}

export const contentData: ContentData[] = [
    {
        id: 5,
        title: "Get all notes",
        url: "/v1/getallnotes",
        method: "GET",
        queryName: "getAllNotes",
        text: "This endpoint returns all notes from the database without authentication."
    },
    {
        id: 1,
        title: "Create a new note",
        url: "/v1/demonote/create",
        method: "POST",
        queryName: "createNote",
        text: "This endpoint allows authenticated users to create a new note."
    },
    {
        id: 2,
        title: "Delete a note",
        url: "/v1/deletepost/id",
        method: "POST",
        queryName: "deleteNote",
        text: "This endpoint allows authenticated users to delete a specific note by its ID."
    },
    {
        id: 3,
        title: "Update a note",
        url: "/v1/updatenote/id",
        method: "POST",
        queryName: "updateNote",
        text: "This endpoint allows authenticated users to update a specific note by its ID."
    },
    {
        id: 4,
        title: "Get notes by user ID",
        url: "/v1/seeusernotes/id",
        method: "GET",
        queryName: "seeAllNotesByUserId",
        text: "This endpoint returns all notes created by a specific user, requiring authentication."
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