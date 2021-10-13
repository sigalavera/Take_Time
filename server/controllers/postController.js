const { validPost, postModel } = require("../models/postModel");

const getAllPosts = async (req, res, next) => {
    // try {
    //     const Posts = await postModel.find({});
    //     if (!Posts) {
    //         res.json({ Posts, message: "bad request" }).status(301)
    //     }
    //     res.json({ Posts }).status(200);
    // } catch (e) {
    //     console.log(e);
    //     res.json({ message: "Server error" }).status(500);
    // }
    const {page } = req.query
  
    try {
        const LIMIT = 3;
        const startIndex = (Number(page) - 1) * LIMIT; //get the starting index of every page
        const total = await postModel.countDocuments({});

        await  postModel.find({}, (err, result) => {
            if (err) throw err;
            res
              .status(200)
              .json({
                data: result,
                currentPage: Number(page),
                numberOfPages: Math.ceil(total / LIMIT),
              });
          })
            .sort({ _id: -1 })
            .limit(LIMIT)
            .skip(startIndex);
        } catch (err) {
          res
            .status(500)
            .json({
              success: false,
              message: "problem in database",
              error: err.message
            });
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