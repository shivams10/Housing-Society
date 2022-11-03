const {
  getResources,
  getResourcesById,
  createResources,
  updateResources,
} = require("../controller/controller");
const router = require("express").Router();

// Resource Routers
router.post("/", createResources);
router.get("/", getResources);
router.get("/:id", getResourcesById);
router.patch("/", updateResources);

module.exports = router;
