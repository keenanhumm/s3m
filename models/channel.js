const mongoose = require('mongoose');

const { Schema } = mongoose;

const ChannelSchema = new Schema({
  name: String
});

const Channel = mongoose.model('channels', ChannelSchema);

module.exports = Channel;
