const router = require("express").Router();
const {
    findProfile,
    createUser
} = require('../controller/user.controller.js');

router.post('/create', createUser)

router.post('/login', findProfile)

module.exports = router;