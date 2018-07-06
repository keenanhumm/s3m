const Channels = require('../models/channel');
const Posts = require('../models/post');

const Query = {
  post: (root, { id }) => Posts.findById(id),
  channel: (root, { id }) => Channels.findById(id),
  channels: () => Channels.find({}),
  posts: () => Posts.find({})
};

const Mutation = {
  CreatePost: (root, newPost) => Posts.create(newPost).then(id => Posts.findById(id)),
  CreateChannel: (root, { name }) => Channels.create({ name }).then(id => Channels.findById(id))
};

const Post = {
  channel: post => Channels.findById(post.channelId)
};

const Channel = {
  posts: channel => Posts.find({ channelId: channel.id.toString() })
};

module.exports = {
  Query, Mutation, Post, Channel
};
