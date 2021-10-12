const { validCase, caseModel } = require("../models/casesModel");

const getAllCases = async (req, res, next) => {
    try {
        const cases = await caseModel.find({});
        if (!cases) {
            res.json({ message: "bad request" }).status(301)
        }
        res.json({ cases }).status(200);
    } catch (e) {
        console.log(e);

        res.json({ message: "Server error" }).status(500);
    }
};

const createCase = async (req, res, next) => {
    try {
        const newCase = await caseModel.insertMany(req.body);
        res.json({ newCase, message: "ca" }).status(201);
        const { error } = validCase(req.body);
        if (error) {
            res.json({ error }).status(301);
        }


    } catch (e) {
        console.log(e);
        res.status(400).json({ message: "Server error", })
    }

}

module.exports = {
    getAllCases,
    createCase
}