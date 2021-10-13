const joi = require("joi");
const mongoose = require("mongoose");
const Joigoose = require("joigoose")(mongoose);

const userSchema = joi.object({
    email: joi.string().required(),
    coins: joi.number().required().default(10),
    imageUrl: joi.string().required(),
    givenName: joi.string().required(),
    googleId: joi.string().required(),
    name: joi.string().required(),
})

const validUser = (userData) => {
    const responseFromJoi = userSchema.validate(userData);
    console.log(responseFromJoi);
    return responseFromJoi;
};

const mongooseUserModel = new mongoose.Schema(
    Joigoose.convert(userSchema)
);

const userModel = mongoose.model("user", mongooseUserModel);


module.exports = userModel;





