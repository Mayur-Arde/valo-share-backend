import { Schema, model } from 'mongoose';

const PostSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
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
        type: Schema.Types.ObjectId,
      },
    ],
  },
});

const postModel = model('socialPost', PostSchema);

export default postModel;
