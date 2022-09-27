const { Schema, model } = require("mongoose");
const difficulties = ['High', 'Medium-High', 'Medium', 'Medium-Low', 'Low']
const skiStations = ['Baqueira-Beret', 'Boí Taüll', 'Formigal', 'Sierra Nevada', 'Cerler', 'Panticosa', 'Astún', 'Candanchú', ' La Pinilla', 'Valdesquí']

const EventsSchema = new Schema(
    {
        name: { type: String, required: true, unique: true },
        author: { type: Schema.Types.ObjectId, ref: "User" },
        description: { type: String, required: true },
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

