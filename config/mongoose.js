const mongoose = require("mongoose");

//setting up mongodb connection
mongoose.connect("mongodb://localhost/Hospital_Data");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "-------Error connecting to Database"));

db.once("open", function(){
    console.log("---Database connected");
})

module.exports = db;
//----------------------------