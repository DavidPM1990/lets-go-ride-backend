const CommentModel = require('../models/Comments.model');


const findAllComments = () => {
    CommentModel
        .find()
        .populate('author')
        .then((comments) => {
            console.log(comments)
            res.json(comments)
        })
        .catch(next)
}

const createComment = () => {
    const { description, author } = req.body
    CommentModel
        .create({ description, author })
        .then((comment) => {
            res.json(comment)
        })
        .catch(next)
}

module.exports = { findAllComments, createComment }