const casesRouter = require("express").Router();
const casesController = require("../controllers/casesController");

// @ GET request to get all cases.
// @ URL http://localhost:5000/case/getAllCases
casesRouter.get("/getAllCases", casesController.getAllCases);

// @ POST request create case.
// @ URL http://localhost:5000/case/createCase
casesRouter.post("/createCase", casesController.createCase);


module.exports = casesRouter;

