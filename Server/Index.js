const express = require("express");
const app = express();
const router = require("./route");
const PORT = 5000;

app.use(express.json());
app.use("/", router);

app.listen(PORT, ()=>{
    console.log("listening to Port:" + PORT + "...");
});