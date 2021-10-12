import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});
API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${JSON.parse(
      localStorage.getItem("profile")).token
      }`;
  }
  return req;
});

export const getAllCases = async () => {
  const data = await axios.get("http://localhost:5000/case/getAllCases")
  return data;
}

// axios example 
//export const fetchPosts = () => API.get("/posts");

