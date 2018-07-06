import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import gql from 'graphql-tag';

const devEndpoint = 'http://localhost:3000/graphql';
const prodEndpoint = 'https://vidiverse.herokuapp.com/graphql';

const client = new ApolloClient({
  link: new HttpLink({ uri: prodEndpoint }),
  cache: new InMemoryCache()
});

export async function getChannels() {
  const query = gql`
    {
      channels {
        _id
        name
      }
    }
  `;
  const {
    data: { channels }
  } = await client.query({ query });
  return channels;
}

export async function getChannel(id) {
  const query = gql`
    query ChannelQuery($id: String!) {
      channel(id: $id) {
        _id
        name
        posts {
          _id
          title
          videoId
          postedAt
        }
      }
    }
  `;
  const {
    data: { channel }
  } = await client.query({ query, variables: { id }, fetchPolicy: 'no-cache' });
  return channel;
}

export async function createPost(input) {
  const postedAt = Date.now().toString();
  const { title, videoId, channelId } = input;
  const mutation = gql`
    mutation CreatePost($title: String!, $videoId: String!, $channelId: String!, $postedAt: String!) {
      post: CreatePost(title: $title, videoId: $videoId, channelId: $channelId, postedAt: $postedAt) {
        _id
        title
        videoId
        postedAt
        channel {
          _id 
          name
        }
      }
    }
  `;
  const { data: { post } } = await client.mutate({
    mutation,
    variables: {
      title,
      videoId,
      channelId,
      postedAt
    }
  });
  return post;
}
export async function createChannel(input) {
  const { name } = input;
  const mutation = gql`
    mutation CreateChannel($name: String!) {
      channel: CreateChannel(name: $name) {
        _id
        name
      }
    }
  `;
  const { data: { channel } } = await client.mutate({
    mutation,
    variables: {
      name
    }
  });
  return channel;
}
