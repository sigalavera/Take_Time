const questionRouter = require("express").Router();
const questionController = require("../controllers/questionController");


// @ GET request to get all cases.
// @ URL http://localhost:5000/question/getAlllQuestions
questionRouter.get("/getAlllQuestions", questionController.getAlllQuestions);

// @ POST request create case.
<<<<<<< HEAD
// @ URL http://localhost:5000/question/createCase
questionRouter.post("/createCase", questionController.createQuestion);
=======
// @ URL http://localhost:5000/question/createQuestion
questionRouter.post("/createQuestion", questionController.createQuestion);
>>>>>>> main

// // @ PUT request create case.
// // @ URL http://localhost:5000/case/updateCase
// questionRouter.put("/createCase", auth, caseController.updateCase);

// // @ DELETE request create case.
// // @ URL http://localhost:5000/case/deleteCase
// questionRouter.delete("/deleteCase", auth, caseController.deleteCase);


module.exports = questionRouter;

