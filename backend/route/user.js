const router = require("express").Router();
const userController = require("../controller/userController");

//let User = require('../model/user'); //user Schema

router
  .route("/")
  .get(userController.getAllUser)
  .post(userController.createUser);

router.route("/:id").get(userController.findById);

module.exports = router;
