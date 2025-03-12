import axios from "axios"
import { contentAllResponse, LoginResponse } from "../type";

export const getAllData = async (url: string) => {
  try {
    const res = await axios.get(url);
    const {flag,  data}: contentAllResponse = res.data;
    if (flag === false) {
      throw new Error("Error fetching All content data");
    }

    return data;
  } catch (error: unknown) {
    console.log(error);
  }
}

export const userLogin = async() => {
  try {
    const res = await axios.post("https://fake-data-api-backend.vercel.app/v1/signin", {identifier: "v234", password: "12345678"}, {withCredentials:  true});
    const {data}: LoginResponse = res.data;
   return data;
  } catch (error:unknown) {
    console.log(error);
  }
}

export const userUpdate = async () => {
  try {
    const res = await axios.post("http://fake-data-api-backend.vercel.app/v1/updateprofile", {
      fullname: "roni",
      username:  "roniray45",
    }, {withCredentials: true});
    const data = res.data;
    return  data;
  } catch (error:unknown) {
    console.log(error);
  }
}

export const userChangePassword = async () => {
  try {
    const res = await axios.post("http://fake-data-api-backend.vercel.app/v1/changepassword", {
     newPassword: "12345678",
     oldPassword: "12345678"
    }, {withCredentials: true});
    
    const data = res.data;
    return  data;
  } catch (error:unknown) {
    console.log(error);
  }
}

export const getUser = async ()   => {
  try {
    const res = await axios.get("http://fake-data-api-backend.vercel.app/v1/changepassword", {withCredentials: true});
     const data = res.data;
     return data;
  } catch (error:unknown) {
    console.log(error);
  }
}
export const userLogout= async ()   => {
  try {
    const res = await axios.get("http://fake-data-api-backend.vercel.app/v1/logout", {withCredentials: true});
     const data = res.data;
     return data;
  } catch (error:unknown) {
    console.log(error);
  }
}