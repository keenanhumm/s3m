module.exports = `
type Query {
  channel(id: ID!): Channel
  channels: [Channel]
  post(id: ID!): Post
  posts: [Post]
}

type Mutation {
  createPost(input: CreatePostInput): Post
  createChannel(input: CreateChannelInput): Channel
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
}

input CreatePostInput {
  title: String
  videoId: String
  channelId: ID
}

input CreateChannelInput {
  name: String
}
`;
