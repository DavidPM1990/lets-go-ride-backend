const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, trim: true, minlength: 6 },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: Number, required: true },
    eventsJoined: [{ type: Schema.Types.ObjectId, ref: "Event" }]
  },
  {
    timestamps: true,
  }
);

const UserModel = model("User", userSchema);

module.exports = UserModel;