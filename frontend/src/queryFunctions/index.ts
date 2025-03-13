import axios from "axios"
import { LoginResponse } from "../type";
import { asyncHandler } from "../utils/Server";
const currentUser = Date.now();


export const userLogin = asyncHandler(async () => { // working
  const res = await axios.post("https://fake-data-api-backend.vercel.app/v1/signin", { identifier: String(currentUser), password: "12345678" }, { withCredentials: true });
  const { data }: LoginResponse = res.data;

  return data;
});


export const userSignup = asyncHandler(async () => { // working
  
  const res = await axios.post("https://fake-data-api-backend.vercel.app/v1/signup", {
    fullName: "I am new User",
    username: String(currentUser),
    email: `test${currentUser}@gmail.com`,
    password: "12345678"
  });

  return res.data;
})


export const userUpdate = asyncHandler(async () => {
  const res = await axios.post("https://fake-data-api-backend.vercel.app/v1/updateprofile", {
    fullName: "roni",
    username: "roniray45",
  }, { withCredentials: true });
  return res.data;
})

export const userChangePassword = asyncHandler(async () => {
  const res = await axios.post("https://fake-data-api-backend.vercel.app/v1/changepassword", {
    newPassword: "12345678",
    oldPassword: "12345678"
  }, { withCredentials: true });
  return res.data;
})

export const userProfile = asyncHandler(async () => {
  const res = await axios.get("https://fake-data-api-backend.vercel.app/v1/getuser", { withCredentials: true });
  return res.data;
})
export const userLogout = asyncHandler(async () => {
  const res = await axios.get("https://fake-data-api-backend.vercel.app/v1/logout", { withCredentials: true });
  return res.data;
}
)

export const getUserbyId = asyncHandler(async () => { // working
  const res = await axios.get("https://fake-data-api-backend.vercel.app/v1/getuser?id=67d2469a0643aa381964fb7b", { withCredentials: true });
  return res.data;
})
// notes functions

export const getAllNotes = asyncHandler(async () => {
  const res = await axios.get("https://fake-data-api-backend.vercel.app/v1/getallnotes");
  return res.data;
})

export const createNewNote = asyncHandler(async () => {
  const res = await axios.post(`https://fake-data-api-backend.vercel.app/v1/demonote/create`, { content: `hey you store new  data here ${Date.now()}` }, { withCredentials: true });
  return res.data;
})

export const deleteNotebyId = async () => {
  return { statusCode: 201, message: "post deleted Successfully", flag: true };
}

export const updateNotebyId = async () => {
  return { statusCode: 201, message: "post updated Successfully", flag: true };
}

export const getNotesbyUserID = asyncHandler(async () => {
  const res = await axios.get(`https://fake-data-api-backend.vercel.app/v1/seeusernotes?id=67d2469a0643aa381964fb7b`, { withCredentials: true })
  return res.data
}
)
