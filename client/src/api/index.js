import axios from "axios";

const API = axios.create({
<<<<<<< HEAD
  baseURL: "http://localhost:5000",
=======
  baseURL :"http://localhost:5000",
>>>>>>> main
});
API.interceptors.request.use((req) => {
  if (localStorage.getItem("userProfile")) {
    req.headers.Authorization = `Bearer ${JSON.parse(
<<<<<<< HEAD
      localStorage.getItem("profile")).token
      }`;
=======
      localStorage.getItem("userProfile")).token
    }`;
>>>>>>> main
  }
  return req;
});

export const getAllCases = async () => {
  const data = await axios.get("http://localhost:5000/case/getAllCases")
  return data;
}

// axios example 
//export const fetchPosts = () => API.get("/posts");

export const signIn = (userData) => API.post("/user/signin", userData);
