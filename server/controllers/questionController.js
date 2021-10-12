const { validQuestion, questionModel } = require("../models/questionModel");

const getAlllQuestions = async (req, res, next) => {
    try {
        const questions = await questionModel.find({});
        if (!questions) {
            res.json({ message: "bad request" }).status(301)
        }
        res.json({ questions }).status(200);
    } catch (e) {
        console.log(e);

        res.json({ message: "Server error" }).status(500);
    }
};

const createQuestion = async (req, res, next) => {
    try {
        const newQuestion = await questionModel.insertMany(req.body);
        res.json({ newQuestion, message: "new question" }).status(201);
        const { error } = validQuestion(req.body);
        if (error) {
            res.json({ error }).status(301);
        }


    } catch (e) {
        console.log(e);
        res.status(400).json({ message: "Server error", })
    }

}

module.exports = {
    getAlllQuestions,
    createQuestion
}