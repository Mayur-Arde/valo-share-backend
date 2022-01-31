import mongoose from 'mongoose';

const sechma = mongoose.Schema;

const post = new sechma({
  userId: {
    type: sechma.Types.ObjectId,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  postOn: {
    type: String,
  },
  likes: {
    type: Number,
    likeBy: [
      {
        type: sechma.Types.ObjectId,
      },
    ],
  },
});

const postModel = mongoose.model('posts', post);

export default postModel;
