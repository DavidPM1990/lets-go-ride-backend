const { isValidObjectId } = require('mongoose');
const CommentModel = require('../models/Comments.model');
const EventModel = require('../models/Event.model');


const findAllComments = (_req, res, next) => {
    CommentModel
        .find()
        .populate('author')
        .sort({ createdAt: 1 })
        .then((comments) => {
            res.json(comments)
        })
        .catch(next)
}

const createComment = (req, res, next) => {

    const { body, author, eventId } = req.body

    CommentModel
        .create({ body, author })
        .then((newComment) => {
            console.log("soy el nuevo comentarioooooooooooo", newComment)
            return EventModel.findByIdAndUpdate({ _id: eventId }, { $push: { comments: { $each: [newComment._id], $position: 0 } } }, { new: true });
        })
        .then((event) => {
            res.json(event)
        })
        .catch((err) => next(err));
}


const deleteComment = (req, res, next) => {
    try {
        const { id } = req.params
        if (!isValidObjectId(id)) {
            throw new Error('Error: Invalid mongo ID')
        }
        CommentModel
            .findByIdAndDelete(id)
            .then(() => {
                res.sendStatus(204)
            })
            .catch(next)
    } catch (err) {
        res.status(400).json({ errorMessage: err.message })
    }
}


module.exports = { findAllComments, createComment, deleteComment }