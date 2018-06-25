const graphql = require('graphql');
const uuid = require('uuid');
const _ = require('lodash');

const channels = [
  {
    id: '1',
    name: 'the_fam',
    posts: [
      {
        id: 'AOz8Obs3_wU',
        title: 'LeBron James Top 10 Plays From 2017-2018 Season'
      },
      {
        id: 'FZTtcfm5NZE',
        title: "Lebron James 'Long Live The King' Motivational Workout"
      },
      {
        id: 'zbfs0PVEWYk',
        title:
          "LeBron James' VERY BEST Plays of 2016-17: Regular Season & Playoffs!"
      }
    ]
  }
];

const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLSchema,
  GraphQLList
} = graphql;

const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: {
    id: { type: GraphQLString },
    title: { type: GraphQLString }
  }
});
const ChannelType = new GraphQLObjectType({
  name: 'Channel',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    posts: {
      type: GraphQLList
    }
  }
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    channel: {
      type: ChannelType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return _.find(channels, { id: args.id });
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
