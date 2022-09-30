const router = require("express").Router();
const {
    createEvent,
    findAllEvents,
    updateOneEvent,
    getOneEvent,
    deleteOneEvent,
    // addEventIdToUser
} = require("../controller/events.controller")

// GET

router.get("/", findAllEvents)

router.get("/getOneEvent/:id", getOneEvent)

// POST

router.post("/create", createEvent)

// router.post("/addEvent/:id", addEventIdToUser)

// PUT

router.put("/update/:id", updateOneEvent)

// DELETE

router.delete("/deleteEvent/:id", deleteOneEvent)


module.exports = router;














