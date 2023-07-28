const mongoose = require('mongoose');

const { Schema } = mongoose;
const UserSchema = new Schema(
  {
    _id: {
      type: String,
      unique: true,
      required: true,
    },
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: 'basic',
    },
  },
  {
    timestamps: true,
  },
);

const UserModel = mongoose.model('Users', UserSchema);

module.exports = UserModel;
