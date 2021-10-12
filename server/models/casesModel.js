const joi = require("joi");
const mongoose = require("mongoose");

const Joigoose = require("joigoose")(mongoose);

const caseSchema = joi.object({
    title: joi.string(),
    descripition: joi.string(),
    createdAt: joi.string().default(new Date())

})

const validCase = (caseData) => {
    const responseFromJoi = caseSchema.validate(caseData);
    console.log(responseFromJoi);
    return responseFromJoi;
};

const mongooseCaseModel = new mongoose.Schema(
    Joigoose.convert(caseSchema)
);

const caseModel = mongoose.model("case", mongooseCaseModel);

module.exports = {
    validCase,
    caseModel,
};