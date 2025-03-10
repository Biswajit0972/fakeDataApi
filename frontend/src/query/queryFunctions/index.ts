import axios from "axios"
import { contentAllResponse, loginPayload, LoginResponse } from "../../type";

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

export const userLogin = async(url: string, payload: loginPayload) => {
  try {
    const res = await axios.post(url, payload, {withCredentials:  true});
    // console.log(res);
    const {data}: LoginResponse = res.data;
    console.log(data);
  } catch (error:unknown) {
    console.log(error);
  }
}