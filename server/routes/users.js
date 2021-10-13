const express = require("express");
const { signin, getAllUsers } = require("../controllers/users.js");
const authRouter = express.Router();
authRouter.get("/getAllUsers", getAllUsers)
authRouter.post("/signin", signin);


module.exports = authRouter;
