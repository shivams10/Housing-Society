const {
  createUser,
  getUser,
  getUserbyUserId,
  deleteUser,
  updateUser,
  login,
} = require("../controller/controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token-validation");
// const { manualCheck } = require("../../auth/maualCheck");

// User Routers
router.post("/", createUser);
router.get("/", checkToken, getUser);
router.get("/:id", getUserbyUserId);
router.patch("/", updateUser);
router.delete("/", checkToken, deleteUser);
router.post("/login", login);

module.exports = router;
