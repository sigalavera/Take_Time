const express =require("express") ;
const { signin } =require("../controllers/users.js");
const authRouter = express.Router();

authRouter.post("/signin", signin);


module.exports = authRouter;
