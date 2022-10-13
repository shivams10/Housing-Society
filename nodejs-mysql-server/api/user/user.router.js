const { application } = require("express");
const {createUser,getUser,getUserbyUserId,deleteUser,updateUser } = require("./user.controller")
const router = require("express").Router();

router.post("/",(createUser));
router.get("/",(getUser));
router.get("/:id",getUserbyUserId);
router.patch("/", updateUser)
router.delete("/",deleteUser)

module.exports = router;  