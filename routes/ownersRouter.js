const express = require("express") ;
const router = express.Router() ;
const ownerModel = require("../models/owners_model");

router.get("/", function (req, res) {
res.send("hey owner route is working");
});

if(process.env.NODE_ENV === "development"){
    router.post("/create", function (req, res) {
        res.send("hey, create for owner route is working");
        });
}

module. exports = router;