const router = require("express").Router();
const commentsController = require("../controllers/comments");
const auth = require("../middlewares/auth");

router.route("/createComment").post(auth.verifyToken, commentsController.createComment);
router.route("/listComments").get(auth.verifyToken, commentsController.listComments);

module.exports = router;
