const EventModel = require('../models/Event.model');
const { isValidObjectId } = require('mongoose');
const UserModel = require('../models/User.model');

const createEvent = (req, res, next) => {
    const {
        name,
        author,
        description,
        eventLevel,
        freestyle,
        apresSki,
        place,
        startDate,
        endDate
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
            place,
            startDate,
            endDate
        })
        .then((event) => {
            res.status(201).json(event);
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
            .populate('author')
            .populate({
                path: 'comments',
                populate: [
                    { path: 'author' }
                ]
            })
            .then((event) => {
                res.status(200).json(event);
            })
            .catch(next);
    } catch (err) {
        res.status(400).json({ errorMessage: err.message });
    }
}

const findAllEvents = (_req, res, next) => {
    EventModel
        .find()
        .populate('author')
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
// const addEventIdToUser = (req, res, next) => {
//     const { id } = req.params
//     console.log(id)
//     console.log('SOY EL REQ', req)

// }

module.exports = {
    createEvent,
    findAllEvents,
    updateOneEvent,
    getOneEvent,
    deleteOneEvent,
    // addEventIdToUser
}
