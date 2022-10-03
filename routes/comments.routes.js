const router = require("express").Router();
const {
    findAllComments,
    createComment
} = require("../controller/comments.controller")


router.get("/", findAllComments)

router.post("/create-comment", createComment)


module.exports = router;
