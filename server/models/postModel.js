const joi = require("joi")
const mongoose = require("mongoose");

const Joigoose = require("joigoose")(mongoose);

const postSchema = joi.object({
    title: joi.string().required(),
    comments: joi.string().required(),
    content: joi.string().required(),
    fullName: joi.string().required(),
    createdAt: joi.date().required()
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