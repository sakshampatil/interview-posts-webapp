const router = require("express").Router();
const userController = require("../controllers/user");
const auth = require("../middlewares/auth");

router.route("/signup").post(userController.signup);
router.route("/login").post(userController.login);

module.exports = router;
