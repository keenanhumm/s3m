import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import gql from 'graphql-tag';

const endpointURL = 'http://localhost:3000/graphql';

const client = new ApolloClient({
  link: new HttpLink({ uri: endpointURL }),
  cache: new InMemoryCache()
});

export async function getChannels() {
  const query = gql`
    {
      channels {
        id
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
    query ChannelQuery($id: ID!) {
      channel(id: $id) {
        id
        name
        posts {
          id
          title
          videoId
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
  const { title, videoId, channelId } = input;
  const mutation = gql`
    mutation CreatePost($title: String!, $videoId: String!, $channelId: String!) {
      post: CreatePost(title: $title, videoId: $videoId, channelId: $channelId) {
        id
        title
        channel {
          id 
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
      channelId
    }
  });
  return post;
}
export async function createChannel(input) {
  const { name } = input;
  const mutation = gql`
    mutation CreatePost($name: String!) {
      channel: CreateChannel(name: $name) {
        id
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
