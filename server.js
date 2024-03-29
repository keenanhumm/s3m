const express = require('express');
const app = require('./server/server');
const path = require('path');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(
  'mongodb://keenanhumm:Strong4545@ds119161.mlab.com:19161/vidiverse',
  { useNewUrlParser: true }
);

require('./models/index');

mongoose.connection
  .once('open', () => {
    console.log('connection to mLab db successful!');// eslint-disable-line
  })
  .on('error', (error) => {
    console.warn('Mongoose Error', error);// eslint-disable-line
  });

const port = process.env.PORT || 3000;

const publicPath = path.join(__dirname, '/public');
// const key =
//   'xsgMbsKGfvziD3z4GkeNYuQ4-3sWuPLDY2JnN9OPaA0.8EJyNKGsT3S5SsC5oJtcqm-N7O6_-lVrM9UnfNYm8zU';
// const addressSSL = 'xsgMbsKGfvziD3z4GkeNYuQ4-3sWuPLDY2JnN9OPaA0';
// app.get(`/.well-known/acme-challenge/${addressSSL}`, function(req, res) {
//   res.send(key);
// });


app.use('public', express.static(publicPath));
app.get('*/bundle.js', (req, res) => {
  res.sendFile(path.join(publicPath, '/bundle.js'));
});
app.get('*/style.css', (req, res) => {
  res.sendFile(path.join(publicPath, '/style.css'));
});
app.get('*/favicon.png', (req, res) => {
  res.sendFile(path.join(publicPath, '/favicon.png'));
});
app.get('*/', (req, res) => {
  res.sendFile(path.join(publicPath, '/index.html'));
});
app.listen(port, () => {
  console.log(`server running at ${port}`);// eslint-disable-line
});
