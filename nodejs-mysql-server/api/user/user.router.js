const {
  createUser,
  getUser,
  getUserbyUserId,
  deleteUser,
  updateUser,
  login
} = require("./user.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token-validation");

// User Routers
router.post("/", createUser);
router.get("/", checkToken, getUser);
router.get("/:id", checkToken, getUserbyUserId);
router.patch("/", checkToken, updateUser);
router.delete("/", checkToken, deleteUser);
router.post("/login",login);

// // Resource Routers
// router.post("/", createResources);
// router.get("/",getResources);
// router.get("/:id",getResourcesById);
// router.patch("/",updateResources);

module.exports = router;