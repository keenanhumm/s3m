const db = require('./db');

const Query = {
  post: (root, { id }) => db.posts.get(id),
  channel: (root, { id }) => db.channels.get(id),
  channels: () => db.channels.list(),
  posts: () => db.posts.list()
};

const Mutation = {
  CreatePost: (root, input) => {
    const id = db.posts.create(input);
    return db.posts.get(id);
  },
  CreateChannel: (root, input) => {
    const id = db.channels.create({ ...input, posts: [] });
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
