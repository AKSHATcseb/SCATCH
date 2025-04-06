const express = require("express");
const router = express.Router();
const isloggedin = require("../middlewares/isLoggedIn");
const productModel = require("../models/product_model");
const isLoggedIn = require("../middlewares/isLoggedIn");
const userModel = require("../models/user_model");


router.get("/", function (req, res) {
    let error = req.flash("error");
    // res.render("index", {error, loggedin: false});
    res.render("index", {error});
});

router.get("/shop", isloggedin, async function (req, res) {
    let products = await productModel.find();
    let success = req.flash("success");
    res.render("shop", { products, success });
});

router.get("/cart", isloggedin, async function (req, res) {
    // let products = await productModel.find();
    // let success = req.flash("success");
    res.render("cart", { products });
});

router.get("/addtocart/:id", isloggedin, async function (req, res) {
    let user = await userModel.findOne({email: req.user.email});
    user.cart.push(req.params.productid);
    await user.save();
    req.flash("success" , "added to cart");
    res.redirect("/shop");
});

router.get("/logout", isloggedin, function(req, res) {
    res.render("shop");
});

module.exports = router;