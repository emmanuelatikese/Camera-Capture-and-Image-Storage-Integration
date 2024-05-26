const ImageStorage = require("./controllers/store");
const express = require("express");
const router = express.Router();

router.post("/storeImage", ImageStorage);

module.exports = router;