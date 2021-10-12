const joi = require("joi")
const mongoose = require("mongoose");

const Joigoose = require("joigoose")(mongoose);

const postSchema = joi.object({
    title: joi.string(),
    comments: joi.string(),
    content: joi.string(),
    fullName: joi.string(),
    createdAt: joi.date()
})

const validPost = (postData) => {
    const responseFromJoi = postSchema.validate(postData);
    console.log(responseFromJoi);
    return responseFromJoi;
};

const mongoosePostModel = new mongoose.Schema(
    Joigoose.convert(postSchema)
);

const postModel = mongoose.model("post", mongoosePostModel);

module.exports = {
    validPost,
    postModel,
};