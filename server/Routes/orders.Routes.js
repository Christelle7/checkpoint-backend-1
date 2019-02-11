let express = require("express");
const router = express.Router();
let {list,show, create} = require("../Controllers/orders.Controller")

router.get("/orders",list);

 router.get("/orders/:OrderId", show);

 router.post("/orders", create );

 module.exports = router;