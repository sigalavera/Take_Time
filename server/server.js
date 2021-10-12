const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const cors = require("cors");
app.use(cors());

const db = require("./DB");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
const caseRouter = require("./routes/caseRouter");

app.use("/case", caseRouter);
app.get("/", (req, res) => {
    res.send("Server is up");
})



app.listen(PORT, (err, result) => {
    if (err) throw err;
    console.log("server up");
})

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, '../client/build')));
    // Handle React routing, return all requests to React app
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
}