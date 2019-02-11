let Tasks = require ("../Models/tasks.Models");

module.exports.list = function (request,response,next){
  Tasks.find({}).exec()
  .then(tasks => {
    return response.send (tasks);
  })
  .catch(err => {
    console.log('error tasks')
    return response.send(err)
  });

 };

 module.exports.show = function (request,response,next){
  // return response.json(comments[request.params.commentId-1]);
  Tasks.findById(request.params.TaskId).exec()
  .then(tasks => {
    return response.send (tasks);
  })
  .catch(err => {
    console.log('error tasks')
    return response.send(err)
  });

 };

 module.exports.create = function (request,response,next){
 
  const task = new Tasks ();

  task.name = request.body.name;
  task.date=request.body.date;

  task.save().then(savedTasks=>{
    return response.send(savedTasks);
  })
  .catch(err => {
    console.log('error tasks')
    return response.send(err)
  });
  
 };

