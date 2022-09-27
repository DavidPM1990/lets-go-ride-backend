const EventModel = require('../models/Event.model');
const { isValidObjectId } = require('mongoose');

const createEvent = (req, res, next) => {
    const {
        name,
        author,
        description,
        eventLevel,
        freestyle,
        apresSki,
        place
    } = req.body;
    console.log('Soy req.body', req.body);
    EventModel
        .create({
            name,
            author,
            description,
            eventLevel,
            freestyle,
            apresSki,
            place
        })
        .then(() => {
            res.sendStatus(201);
        })
        .catch(next);
}

const getOneEvent = (req, res, next) => {
    try {
        const { id } = req.params;
        if (!isValidObjectId(id)) {
            throw new Error('Error: Invalid mongo ID');
        }
        EventModel
            .findById(id)
            .then((event) => {
                res.status(200).json(event);
            })
            .catch(next);
    } catch (err) {
        res.status(400).json({ errorMessage: err.message });
    }
}

const findAllEvents = (req, res, next) => {
    EventModel
        .find()
        .then(events => {
            console.log(events)
            res.json(events)
        })
        .catch(next);
}

const updateOneEvent = (req, res, next) => {
    try {
        const { id } = req.params
        if (!isValidObjectId(id)) {
            throw new error('Error: Invalid mongo ID')
        }
        const {
            name,
            description,
            eventLevel,
            freestyle,
            apresSki,
            place
        } = req.body

        EventModel
            .findByIdAndUpdate(id, {
                name,
                description,
                eventLevel,
                freestyle,
                apresSki,
                place
            })
            .then(() => {
                res.sendStatus(204)
            })
            .catch(next);
    }
    catch (err) {
        res.status(400).json({ ErrorMessage: err.message });
    }
}

const deleteOneEvent = (req, res, next) => {
    try {
        const { id } = req.params;
        if (!isValidObjectId(id)) {
            throw new Error('Error: Invalid mongo ID');
        }
        EventModel
            .findByIdAndDelete(id)
            .then(() => {
                res.sendStatus(204);
            })
            .catch(next)
    } catch (err) {
        res.status(400).json({ errorMessage: err.message })
    }

}

module.exports = {
    createEvent,
    findAllEvents,
    updateOneEvent,
    getOneEvent,
    deleteOneEvent
}






