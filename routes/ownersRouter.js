const express = require("express") ;
const router = express.Router() ;

router.get("/", function (req, res) {
res.send("hey owner route is working");
});

module. exports = router;