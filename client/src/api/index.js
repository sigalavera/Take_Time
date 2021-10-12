import axios from "axios";

const API = axios.create({
  baseURL :"http://localhost:9000",
});
API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${JSON.parse(
      localStorage.getItem("profile")).token
    }`;
  }
  return req;
});
// axios example 
//export const fetchPosts = () => API.get("/posts");

