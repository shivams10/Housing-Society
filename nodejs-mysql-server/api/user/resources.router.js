const {
    getResources,
    getResourcesById,
    createResources,
    updateResources
  } = require("./user.controller");
  const router = require("express").Router();

// Resource Routers
router.post("/", createResources);
router.get("/",getResources);
router.get("/:id",getResourcesById);
router.patch("/",updateResources);

module.exports = router;