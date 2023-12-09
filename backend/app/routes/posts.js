const router = require("express").Router();
const postsController = require("../controllers/posts");
const auth = require("../middlewares/auth");

router.route("/createPost").post(auth.verifyToken, postsController.createPost);
router.route("/listPosts").get(auth.verifyToken, postsController.listPosts);
router.route("/getPostById/:id").get(auth.verifyToken, postsController.getPostById);

module.exports = router;
