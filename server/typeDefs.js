module.exports = `
type Query {
  channel(id: ID!): Channel
  channels: [Channel]
  post(id: ID!): Post
  posts: [Post]
}

type Mutation {
  CreatePost(title: String!, videoId: String!, channelId: String!, postedAt: String!): Post
  CreateChannel(name: String!): Channel
}

type Channel {
  id: ID!
  name: String
  posts: [Post]
}

type Post {
  id: ID!
  title: String
  videoId: String
  channel: Channel
  postedAt: String
}
`;
