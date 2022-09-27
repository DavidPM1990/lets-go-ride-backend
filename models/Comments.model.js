const { Schema, model } = require("mongoose");

const CommentSchema = new Schema(
    {
        author: { type: Schema.Types.ObjectId, ref: "User" },
        body: { type: String, required: true },
    },
    {
        timestamps: true
    }
);

const CommentModel = model("Comments", CommentSchema);

module.exports = CommentModel;