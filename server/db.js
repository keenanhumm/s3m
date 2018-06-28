const { DataStore } = require('notarealdb');

const store = new DataStore('./server/collections');
const channels = store.collection('channels');
const posts = store.collection('posts');
module.exports = {
  channels,
  posts
};
