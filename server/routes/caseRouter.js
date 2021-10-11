const casesRouter = require("express").Router();
const caseController = require("../controllers/casesController");


// @ GET request to get all cases.
// @ URL http://localhost:5000/case/getAllCases
casesRouter.get("/getAllCases", caseController.getAllCases);

// @ POST request create case.
// @ URL http://localhost:5000/case/createCase
casesRouter.post("/createCase", caseController.createCase);

// // @ PUT request create case.
// // @ URL http://localhost:5000/case/updateCase
// casesRouter.put("/createCase", auth, caseController.updateCase);

// // @ DELETE request create case.
// // @ URL http://localhost:5000/case/deleteCase
// casesRouter.delete("/deleteCase", auth, caseController.deleteCase);


module.exports = casesRouter;

