import React, { useEffect, useState } from "react";
import { createPost } from "../../../api";

const AddPost = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("userProfile")));
  }, []);
  console.log(user?.result?.email);
  const [newPost, setNewPost] = useState({
    title: "",
    comments: "",
    content: "",
    fullName: "",
    email: "",
  });

  const createNewPosts = () => {
    createPost(newPost);
    setNewPost({
      title: "",
      comments: "",
      content: "",
      fullName: "",
      email: `${user?.result?.email}`,
    });
  };

  const handleChange = (e) => {
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <input
        onChange={handleChange}
        placeholder="title"
        value={newPost.title}
        name="title"
        type="text"
      />
      <input
        onChange={handleChange}
        placeholder="comments"
        value={newPost.comments}
        name="comments"
        type="text"
      />
      <input
        onChange={handleChange}
        placeholder="content"
        value={newPost.content}
        name="content"
        type="text"
      />
      <input
        onChange={handleChange}
        placeholder="fullName"
        value={newPost.fullName}
        name="fullName"
        type="text"
      />
      <button type="submit" onClick={createNewPosts}>
        {" "}
        שלח{" "}
      </button>
    </div>
  );
};
export default AddPost;
