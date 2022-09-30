const router = require("express").Router();
const {
    GetUser
} = require("../controller/user.controller")


router.get("/", GetUser)




module.exports = router;
