let express = require("express");
const router = express.Router();
let {list,show, create} = require("../Controllers/tasks.Controller")

router.get("/tasks",list);

 router.get("/tasks/:TaskId", show);

 router.post("/tasks", create );

 module.exports = router;