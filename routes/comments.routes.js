const router = require("express").Router();
const {
    findAllComments,
    createComment
} = require("../controller/comments.controller")


router.get("/", findAllComments)

router.post("/create-comment", createComment)


module.exports = router;

// sacar todo esto a las rutas de eventos y utilizar req.params para obtener el id del evento en la creacion del comment
