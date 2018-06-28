const db = require('./db');

const Query = {
  post: (root, { id }) => db.posts.get(id),
  channel: (root, { id }) => db.channels.get(id),
  channels: () => db.channels.list(),
  posts: () => db.posts.list()
};

const Mutation = {
  createPost: (root, { postInput }) => {
    const id = db.posts.create({ postInput });
    return db.posts.get(id);
  },
  createChannel: (root, { channelInput }) => {
    const id = db.channels.create({ ...channelInput, posts: [] });
    return db.channels.get(id);
  }
};

const Post = {
  channel: post => db.channels.get(post.channelId)
};

const Channel = {
  posts: channel => db.posts.list().filter(post => post.channelId === channel.id)
};

module.exports = {
  Query, Mutation, Post, Channel
};
