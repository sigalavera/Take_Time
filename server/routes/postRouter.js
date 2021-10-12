const postRouter = require("express").Router();
const postController = require("../controllers/postController");


// @ GET request to get all cases.
// @ URL http://localhost:5000/post/getAllPosts
postRouter.get("/getAllPosts", postController.getAllPosts);

// @ POST request create post.
// @ URL http://localhost:5000/post/createPost
postRouter.post("/createPost", postController.createPost);

// // @ PUT request create case.
// // @ URL http://localhost:5000/case/updateCase
// postRouter.put("/updatePost", postController.updatePost);

// // @ DELETE request create case.
// // @ URL http://localhost:5000/case/deleteCase
// postRouter.delete("/deletePost", postController.deletePost);


module.exports = postRouter;

