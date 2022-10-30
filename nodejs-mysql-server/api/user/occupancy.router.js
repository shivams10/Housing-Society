const { occupancyCheck } = require("../../middleware/occupancyCheck");
const { createOccupancy, getOcuupancy,deleteOccupancy,updateOccupancy } = require("./user.controller");
const router = require("express").Router();

router.post("/",occupancyCheck, createOccupancy);
router.get("/", getOcuupancy);
router.delete('/',deleteOccupancy);
router.patch('/',updateOccupancy)

module.exports = router;