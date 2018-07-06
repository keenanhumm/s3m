const mongoose = require('mongoose');

const { Schema } = mongoose;

const PostSchema = new Schema({
  title: String,
  videoId: String,
  postedAt: String,
  channelId: String
});

const Post = mongoose.model('posts', PostSchema);

module.exports = Post;
