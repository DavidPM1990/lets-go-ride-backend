const CommentModel = require('../models/Comments.model');
const EventModel = require('../models/Event.model');


const findAllComments = (_req, res, next) => {
    CommentModel
        .find()
        .populate('author')
        .then((comments) => {
            res.json(comments)
        })
        .catch(next)
}

const createComment = (req, res, next) => {      // Preguntar como hacer para devolver comentario y no Id!!!!!

    const { body, author, eventId } = req.body



    CommentModel
        .create({ body, author })
        .then((newComment) => {
            console.log("soy el nuevo comentarioooooooooooo", newComment)
            return EventModel.updateOne({ _id: eventId }, { $push: { comments: newComment._id } });

        })
        .then((event) => {
            res.json(event)
        })

        .catch((err) => next(err));
}


module.exports = { findAllComments, createComment }