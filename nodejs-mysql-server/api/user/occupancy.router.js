const { occupancyCheck } = require("../../middleware/occupancyCheck");
const { createOccupancy, getOcuupancy,deleteOccupancy } = require("./user.controller");
const router = require("express").Router();

router.post("/",occupancyCheck, createOccupancy);
router.get("/", getOcuupancy);
router.delete('/',deleteOccupancy);

module.exports = router;
