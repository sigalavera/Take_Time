const joi = require("joi");
const mongoose = require("mongoose");

const Joigoose = require("joigoose")(mongoose);

const userSchema = new mongoose.Schema({
    email: joi.string().required(),
    coins: joi.number().required(),
    imageUrl: joi.string().required(),
    givenName: joi.string().required(),
    familyName: joi.string.required(),
    googleId: joi.string().required()

})
module.exports = mongoose.model('User', mongooseUserModel)

const mongooseUserModel = new mongoose.Schema(
    Joigoose.convert(userSchema)
);

module.exports = mongooseUserModel





