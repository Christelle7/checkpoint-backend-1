let Orders = require ("../Models/orders.Models");

module.exports.list = function (request,response,next){
  Orders.find({}).exec()
  .then(orders => {
    return response.send (orders);
  })
  .catch(err => {
    console.log('error orders')
    return response.send(err)
  });

 };

 module.exports.show = function (request,response,next){
  
  Orders.findById(request.params.OrderId).exec()
  .then(orders => {
    return response.send (orders);
  })
  .catch(err => {
    console.log('error orders')
    return response.send(err)
  });

 };

 module.exports.create = function (request,response,next){

  const order = new Orders ();

  order.name = request.body.name;
  order.date = request.body.date;
  order.name = request.body.name;

  order.save().then(savedOrders=>{
    return response.send(savedOrders);
  })
  .catch(err => {
    console.log('error order')
    return response.send(err)
  });
  
 };

