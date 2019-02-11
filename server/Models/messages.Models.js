const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const messagesSchema = new Schema({
  body :{
    type: String
  }
});

module.exports = mongoose.model("messages", messagesSchema);