const db = require("../db");

const ImageStorage = (req, res) =>{
    const q = "INSERT INTO ImageTable (name, image_data) VALUES (?, ?)";
    db.query(q, [req.name, req.Image], (err, data)=>{
        err ? console.log("An error occurred") : res.StatusCode(200).json("it was a success");
    });
}

module.exports = ImageStorage;