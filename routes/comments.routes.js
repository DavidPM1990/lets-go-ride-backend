const router = require("express").Router();
const {
    findAllComments,
    createComment,
    deleteComment
} = require("../controller/comments.controller")


router.get("/", findAllComments)

router.post("/create-comment", createComment)

router.delete("/delete-comment/:id", deleteComment)


module.exports = router;
