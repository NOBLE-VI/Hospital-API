const express = require("express");
const router = express.Router();


router.get("/", );
router.use("/doctors", require("./doctors"));
router.use("/patients", require("./patients"));



module.exports = router;