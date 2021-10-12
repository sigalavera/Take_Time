const joi = require("joi");
const mongoose = require("mongoose");

const Joigoose = require("joigoose")(mongoose);

const questionSchema = joi.object({
    questionTitle: joi.string().required(),
    question: joi.string().required(),
    answer: joi.string().required(),
    createdAt: joi.string().default(Date.now)
})

const validQuestion = (questionData) => {
    const responseFromJoi = questionSchema.validate(questionData);
    console.log(responseFromJoi);
    return responseFromJoi;
};

const mongooseQuestionModel = new mongoose.Schema(
    Joigoose.convert(questionSchema)
);

const questionModel = mongoose.model("question", mongooseQuestionModel);

module.exports = {
    validQuestion,
    questionModel,
};