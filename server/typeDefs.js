module.exports = `
type Query {
  channel(id: String!): Channel
  channels: [Channel]
  post(id: String!): Post
  posts: [Post]
}

type Mutation {
  CreatePost(title: String!, videoId: String!, channelId: String!, postedAt: String!): Post
  CreateChannel(name: String!): Channel
}

type Channel {
  _id: String
  name: String
  posts: [Post]
}

type Post {
  _id: String
  title: String
  videoId: String
  channel: Channel
  postedAt: String
}
`;
