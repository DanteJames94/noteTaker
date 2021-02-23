const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 1701;
const mainDir = path.join(__dirname, "/public");

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/notes", function(req, res) {
    res.sendFile(path.join(mainDir, "notes.html"));
});




app.listen(port, function() {
    console.log(`Now listening to port ${port}. Have fun!`);
})
