const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const TasksSchema = new Schema({
  name :{
    type: String
  },
  date :{
    type: String
  }
});

module.exports = mongoose.model("tasks", TasksSchema);