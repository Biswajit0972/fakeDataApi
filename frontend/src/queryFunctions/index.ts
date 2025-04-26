import axios from "axios"
import {LoginResponse} from "../type";
import {asyncHandler} from "../utils/Server";

export const userLogin = asyncHandler(async () => { // working
    const res = await axios.post("https://fake-data-api-backend.vercel.app/v1/signin", {
        identifier: "v234",
        password: "12345678"
    }, {withCredentials: true});
    const {data}: LoginResponse = res.data;
    localStorage.setItem("auth", data.accessToken);
    return data;
});


export const userSignup = asyncHandler(async () => { // working
    const currentUser = Date.now();
    const res = await axios.post("https://fake-data-api-backend.vercel.app/v1/signup", {
        fullName: "I am new User",
        username: String(currentUser),
        email: `test${currentUser}@gmail.com`,
        password: "12345678"
    });

    return res.data;
})


export const userUpdate = asyncHandler(async () => {

    return {
        "statusCode": 201,
        "message": "user updated successfully!",
        "data": {
            "_id": "67d2469a0643aa381964fb7b",
            "fullName": "roni",
            "username": "v234",
            "email": "testingPhase1@gmail.com",
            "createdAt": "2025-03-13T02:44:42.963Z",
            "updatedAt": "2025-03-13T07:23:03.013Z",
            "__v": 0
        },
        "flag": true
    };
})

export const userChangePassword = asyncHandler(async () => {
    const token = localStorage.getItem("auth");

    const res = await axios.post("https://fake-data-api-backend.vercel.app/v1/changepassword", {
        newPassword: "12345678",
        oldPassword: "12345678"
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }, withCredentials: true
    });
    return res.data;
})

export const userProfile = asyncHandler(async () => {
    const token = localStorage.getItem("auth");
    const res = await axios.get("https://fake-data-api-backend.vercel.app/v1/getuser", {
        headers: {
            Authorization: `Bearer ${token}`
        }, withCredentials: true
    });
    return res.data;
})
export const userLogout = asyncHandler(async () => {
        const token = localStorage.getItem("auth");
        const res = await axios.get("https://fake-data-api-backend.vercel.app/v1/logout", {
            headers: {
                Authorization: `Bearer ${token}`,
            }, withCredentials: true
        });
        localStorage.removeItem("auth");
        return res.data;
    }
)

export const getUserbyId = asyncHandler(async () => { // working
    const res = await axios.get("https://fake-data-api-backend.vercel.app/v1/getuser?id=67d2469a0643aa381964fb7b", {withCredentials: true});
    return res.data;
});

// Notes function starts here

export const getAllNotes = asyncHandler(async () => {
    const res = await axios.get("https://fake-data-api-backend.vercel.app/v1/getallnotes");
    return res.data;
})

export const createNewNote = asyncHandler(async () => {
    const res = await axios.post(`https://fake-data-api-backend.vercel.app/v1/demonote/create`, {content: `hey you store new  data here ${Date.now()}`}, {withCredentials: true});
    return res.data;
})

export const deleteNotebyId = async () => {
    return {statusCode: 201, message: "post deleted Successfully", flag: true};
}

export const updateNotebyId = async () => {
    return {statusCode: 201, message: "post updated Successfully", flag: true};
}

export const getNotesbyUserID = asyncHandler(async () => {
        const res = await axios.get(`https://fake-data-api-backend.vercel.app/v1/seeusernotes?id=67d2469a0643aa381964fb7b`, {withCredentials: true})
        return res.data
    }
)
