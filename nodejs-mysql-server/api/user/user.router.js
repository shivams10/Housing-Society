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
const { manualCheck } = require("../../auth/maualcheck");

// User Routers
router.post("/",createUser);
router.get("/",getUser);
router.get("/:id", checkToken, getUserbyUserId);
router.patch("/", checkToken, updateUser);
router.delete("/", checkToken, deleteUser); 
router.post("/login",login);

module.exports = router;