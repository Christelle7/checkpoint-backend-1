let express = require("express");
const router = express.Router();
let {list,show, create} = require("../Controllers/messages.Controller")

router.get("/messages",list);

 router.get("/messages/:messagesId", show);

 router.post("/messages", create );

 module.exports = router;