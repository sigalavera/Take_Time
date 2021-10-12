const { validPost, postModel } = require("../models/postModel");

const getAllPosts = async (req, res, next) => {
    try {
        const Posts = await postModel.find({});
        if (!Posts) {
            res.json({ Posts, message: "bad request" }).status(301)
        }
        res.json({ Posts }).status(200);
    } catch (e) {
        console.log(e);
        res.json({ message: "Server error" }).status(500);
    }
};

const createPost = async (req, res, next) => {
    try {
        const newPost = await postModel.insertMany(req.body);
        const { error } = validPost(req.body);
        if (error) {
            res.json({ error }).status(301);
        }
        res.json({ newPost, message: "ca" }).status(201);

    } catch (e) {
        res.status(400).json({ message: "bad request", })
    }

}



module.exports = {
    getAllPosts,
    createPost
}