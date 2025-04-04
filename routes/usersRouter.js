const express = require("express") ;
const router = express.Router() ;
const {registerUser} = require("../controllers/authController");

router.get("/", function (req, res) {
res.send("hey user route is working");
});

// issme try karna ye feature ke jab tak user saare info. nahi deta tab tak user register naa ho sake
router.post("/register", registerUser);


module. exports = router;