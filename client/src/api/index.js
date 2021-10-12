import axios from "axios";
const API = axios.create({
  baseURL: "http://localhost:5000",
});
API.interceptors.request.use((req) => {
  if (localStorage.getItem("userProfile")) {
    req.headers.Authorization = `Bearer ${JSON.parse(
      localStorage.getItem("userProfile")).token
      }`;
  }
  return req;
});

export const getAllCases = async () => await axios.get("http://localhost:5000/case/getAllCases");
// export const getPosts = () => API.get("/post/getAllPosts");


// axios example 
//export const fetchPosts = () => API.get("/posts");

export const signIn = (userData) => API.post("/user/signin", userData);
export const getAllCases = () => API.get("/case/getAllCases");
