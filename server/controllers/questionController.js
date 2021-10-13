const { validQuestion, questionModel } = require("../models/questionModel");

const getAlllQuestions = async (req, res, next) => {

  const { page } = req.query;

  try {
    const LIMIT = 3;
    const startIndex = (Number(page) - 1) * LIMIT; //get the starting index of every page
    const total = await questionModel.countDocuments({});

    await questionModel
      .find({}, (err, result) => {
        if (err) throw err;
        res.status(200).json({
          data: result,
          currentPage: Number(page),
          numberOfPages: Math.ceil(total / LIMIT),
        });
      })
      .sort({ _id: -1 })
      .limit(LIMIT)
      .skip(startIndex);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "problem in database",
      error: err.message,
    });
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
    res.status(400).json({ message: "Server error" });
  }
};

module.exports = {
  getAlllQuestions,
  createQuestion,
};
