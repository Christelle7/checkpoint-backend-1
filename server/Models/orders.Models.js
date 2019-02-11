const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const OrdersSchema = new Schema({
  name :{
    type: String
  },
  date:{
    type: String
  },
  amount:{
    type: String
  }
});

module.exports = mongoose.model("orders", OrdersSchema);