import axios from "axios";
const API = axios.create({
  baseURL: "http://localhost:5000",
});
API.interceptors.request.use((req) => {
  if (localStorage.getItem("userProfile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("userProfile")).token
    }`;
  }
  return req;
});

// export const getAllCases = async () => await axios.get("http://localhost:5000/case/getAllCases");
// export const getPosts = () => API.get("/post/getAllPosts");

// axios example
//export const fetchPosts = () => API.get("/posts");

//export const signIn = (userData) => API.post("/user/signin", userData);
export const getAllCases = () => API.get("/case/getAllCases");

export const signIn = async (userData) => {
  return await fetch(`http://localhost:5000/user/signin`, {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(userData),
  })
    .then((res) => res.json())
    .then((data) => data);
};
export const getPosts = async (page) => {
  return await fetch(
    `http://localhost:5000/question/getAlllQuestions?page=${page}`
  )
    .then((res) => res.json())
    .then((data) => data);
};
export const getStorePosts = async (page) => {
  return await fetch(`http://localhost:5000/post/getAllPosts?page=${page}`)
    .then((res) => res.json())
    .then((data) => data);
};
export const createPost = async (post, email) => {
  return await fetch(`http://localhost:5000/post/createPost`, {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({ post, email }),
  })
    .then((res) => res.json())
    .then((data) => data);
};

export const getAllUsers = async () => {
  return await fetch(`http://localhost:5000/user/getAllUsers`)
    .then((res) => res.json())
    .then((data) => data);
};
