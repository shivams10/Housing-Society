const { checkToken } = require("../../auth/token-validation");
const {
  getResources,
  getResourcesById,
  createResources,
  updateResources,
} = require("../controller/controller");
const router = require("express").Router();

// Resource Routers
router.post("/", createResources);
router.get("/",checkToken, getResources);
router.get("/:id", getResourcesById);
router.patch("/", updateResources);

module.exports = router;
