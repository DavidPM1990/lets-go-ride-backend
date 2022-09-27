const router = require("express").Router();
const {
    createEvent,
    findAllEvents,
    updateOneEvent,
    getOneEvent,
    deleteOneEvent
} = require("../controller/events.controller")

// GET

router.get("/", findAllEvents)
router.get("/:id", getOneEvent)

// POST

router.post("/create", createEvent)

// PUT

router.put("/:id", updateOneEvent)

// DELETE

router.delete("/:id", deleteOneEvent)


module.exports = router;














