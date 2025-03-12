import axios from "axios"
import { LoginResponse } from "../type";

export const userLogin = async () => {
  try {
    const res = await axios.post("https://fake-data-api-backend.vercel.app/v1/signin", { identifier: "v234", password: "12345678" }, { withCredentials: true });
    const { data }: LoginResponse = res.data;
    return data;
  } catch (error: unknown) {
    console.log(error);
  }
}
export const userSignup = async () => {
  try {
    const res = await axios.post("https://fake-data-api-backend.vercel.app/v1/signin", { email: "test@gmail.com", fullname: "roni ray", username: "v234", password: "12345678" }, { withCredentials: true });
    const { data }: LoginResponse = res.data;
    return data;
  } catch (error: unknown) {
    console.log(error);
  }
}

export const userUpdate = async () => {
  try {
    const res = await axios.post("http://fake-data-api-backend.vercel.app/v1/updateprofile", {
      fullname: "roni",
      username: "roniray45",
    }, { withCredentials: true });
    const data = res.data;
    return data;
  } catch (error: unknown) {
    console.log(error);
  }
}

export const userChangePassword = async () => {
  try {
    const res = await axios.post("http://fake-data-api-backend.vercel.app/v1/changepassword", {
      newPassword: "12345678",
      oldPassword: "12345678"
    }, { withCredentials: true });

    const data = res.data;
    return data;
  } catch (error: unknown) {
    console.log(error);
  }
}

export const userProfile = async () => {
  try {
    const res = await axios.get("http://fake-data-api-backend.vercel.app/v1/getuser", { withCredentials: true });
    const data = res.data;
    return data;
  } catch (error: unknown) {
    console.log(error);
  }
}
export const userLogout = async () => {
  try {
    const res = await axios.get("http://fake-data-api-backend.vercel.app/v1/logout", { withCredentials: true });
    const data = res.data;
    return data;
  } catch (error: unknown) {
    console.log(error);
  }
}


export const getUserbyId = async () => {
  try {
    const res = await axios.get("http://fake-data-api-backend.vercel.app/v1/getuser?id=``", { withCredentials: true });
    const data = res.data;
    return data;
  } catch (error: unknown) {
    console.log(error);
  }
}

// notes functions

export const getAllNotes = async () => {
  try {
    const res = await axios.get("http://fake-data-api-backend.vercel.app/v1/getallnotes");
    const data = res.data;
    return data;
  } catch (error: unknown) {
    console.log(error);
  }
}

export const createNewNote = async () => {
  try {
    const res = await axios.post(`https://fake-data-api-backend.vercel.app/v1/demonote/create`, {content: `hey you store new  data here ${Date.now()}` }, { withCredentials: true });
    const data = res.data;
    return data;
  } catch (error: unknown) {
    console.log(error);
  }
}

export const deleteNotebyId = async () => {
  try {
    // const res = await axios.post(`https://fake-data-api-backend.vercel.app/v1/deletepost?id`, { withCredentials: true });
    
    return {statusCode: 201, message: "post deleted Successfully", flag: true};
  } catch (error: unknown) {
    console.log(error);
  }
}

export const updateNotebyId = async () => {
  try {
    // const res = await axios.post(`https://fake-data-api-backend.vercel.app/v1/deletepost?id`, { withCredentials: true });
    
    return {statusCode: 201, message: "post updated Successfully", flag: true};
  } catch (error: unknown) {
    console.log(error);
  }
}

export const getNotesbyUserID = async () => {
  try {
    const res = await  axios.put(`https://fake-data-api-backend.vercel.app/v1/updatenote?id=<add user id>`,  { withCredentials: true })
    
    return res.data
  } catch (error: unknown) {
    console.log(error);
  }
}

