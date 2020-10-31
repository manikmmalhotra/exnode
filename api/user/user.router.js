const { createUser, getUsers, deleteUser } = require("./user.controller");
const router = require("express").Router();


router.post("/", createUser);
router.get("/", getUsers);
router.delete("/", deleteUser);

module.exports = router;