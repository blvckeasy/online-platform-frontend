const path = require("path")
const express = require("express");
const dotenv = require("dotenv")

const app = express()
dotenv.config()

app.use(express.static(path.join(__dirname, "dist", "my-app")));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, "dist", "my-app", "index.html"));
})

app.listen(process.env.PORT || 5000);