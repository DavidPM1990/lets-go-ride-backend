const { Schema, model } = require("mongoose");

const { difficulties, skiStations } = require('../const/const')

const EventsSchema = new Schema(
    {
        name: { type: String, required: true, unique: true },
        author: { type: Schema.Types.ObjectId, ref: "User" },
        description: { type: String, required: true },
        startDate: { type: Date },
        endDate: { type: Date },
        eventLevel: { type: String, enum: difficulties, required: true },
        freestyle: { type: Boolean, required: true },
        apresSki: { type: Boolean, required: true },
        place: { type: String, enum: skiStations, required: true },
        comments: [{ type: Schema.Types.ObjectId, ref: 'comments' }],
        rating: { type: Number },
        usersList: [{ type: Schema.Types.ObjectId, ref: "User" }]
    },
    {
        timestamps: true,
    }
);

const EventModel = model("Event", EventsSchema);

module.exports = EventModel;

