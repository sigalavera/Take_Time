const mongoose = require("mongoose");
const CONNECTION_URL = process.env.CONNECTION_URL;

mongoose.connect(CONNECTION_URL,{
useNewUrlParser:true,
useUnifiedTopology:true,
useCreateIndex:true
})
.then(()=> console.log("we made it, god is allways good"))
.catch(err => console.log("err:",err));

const db = mongoose.connection;
module.exports = db;
