import mongoose from 'mongoose';

const schema = mongoose.Schema;

const users = new schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: "password is required"
  },
  bio: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.model('users', users);

export default userModel;
