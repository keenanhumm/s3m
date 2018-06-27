import uuid from 'uuid';

export default [
  {
    id: uuid(),
    name: 'the_fam',
    posts: [
      {
        id: uuid(),
        videoId: 'AOz8Obs3_wU',
        title: 'LeBron James Top 10 Plays From 2017-2018 Season'
      },
      {
        id: uuid(),
        videoId: 'FZTtcfm5NZE',
        title: "Lebron James 'Long Live The King' Motivational Workout"
      },
      {
        id: uuid(),
        videoId: 'zbfs0PVEWYk',
        title:
          "LeBron James' VERY BEST Plays of 2016-17: Regular Season & Playoffs!"
      }
    ]
  }
];
