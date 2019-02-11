let express = require("express");
let mongoose = require("mongoose");
let bodyParser = require("body-parser");
let fetch = require("node-fetch");
let fs = require("fs");

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://ACA:graduation2019@ds149984.mlab.com:49984/checkpoint1");

app.use(bodyParser.json());
app.use(express.static('public'))
console.log('HELLO')

let messagesRoutes = require("./Routes/messages.Routes");
let tasksRoutes = require("./Routes/tasks.Routes");
let ordersRoutes = require("./Routes/orders.Routes");

app.use(messagesRoutes)
app.use(tasksRoutes)
app.use(ordersRoutes)


app.get("/foxes",function (request,response,next){
  fetch("https://randomfox.ca/floof/")
.then(response=>response.json()) 
.then(data=>response.json(data.image)); 
 });


 
 const csv =fs.readFileSync("server/data.csv", 'utf8')
 const project = csv.split(/\r?\n/); 
  // console.log(project)
  
  const holder = project.map(function(element) {
    const cvssplit = element.split(",")
    // console.log(cvssplit);
    return cvssplit;
  });
  console.log(holder,"holder")

  const obj = {}
  // first make an empty object
  let count = 0
  // create a counter 
  holder[0].forEach(element => { 
    //create the key values
   obj[element]=holder[1][count]
   count++
   // increments our count 
  });
  console.log(obj)

  

 app.listen(3001, (err) => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now living in apartment 3001");
  });
 
   
