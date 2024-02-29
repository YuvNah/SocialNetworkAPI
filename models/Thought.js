const { Schema, model } = require("mongoose");

// Schema to create a user model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
