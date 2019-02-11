let Messages = require ("../Models/messages.Models");

module.exports.list = function (request,response,next){
  Messages.find({}).exec()
  .then(messages => {
    return response.send (messages);
  })
  .catch(err => {
    console.log('error messages')
    return response.send(err)
  });

 };

 module.exports.show = function (request,response,next){
  // return response.json(comments[request.params.commentId-1]);
  Messages.findById(request.params.messagesId).exec()
  .then(messages => {
    return response.send (messages);
  })
  .catch(err => {
    console.log('error messages')
    return response.send(err)
  });

 };

 module.exports.create = function (request,response,next){

  const message = new Messages ();

  message.body = request.body.message;

  message.save().then(savedMessages=>{
    return response.send(savedMessages);
  })
  .catch(err => {
    console.log('error messages')
    return response.send(err)
  });
  
 };

