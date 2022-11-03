const { checkToken } = require("../../auth/token-validation");
const { occupancyCheck } = require("../../middleware/occupancyCheck");
const {
  createOccupancy,
  getOcuupancy,
  deleteOccupancy,
  updateOccupancy,
} = require("../controller/controller");
const router = require("express").Router();

router.post("/", occupancyCheck, createOccupancy);
router.get("/",checkToken,getOcuupancy);
router.delete("/", deleteOccupancy);
router.patch("/", updateOccupancy);

module.exports = router;
