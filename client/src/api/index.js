import axios from "axios";

const API = axios.create({
  baseURL :"http://localhost:5000",
});
API.interceptors.request.use((req) => {
  if (localStorage.getItem("userProfile")) {
    req.headers.Authorization = `Bearer ${JSON.parse(
      localStorage.getItem("userProfile")).token
    }`;
  }
  return req;
});
// axios example 
//export const fetchPosts = () => API.get("/posts");

export const signIn = (userData) => API.post("/user/signin", userData);
