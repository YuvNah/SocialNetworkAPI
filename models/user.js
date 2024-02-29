// Schema to create a user model
const userSchema = new Schema({
  userName: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
});
