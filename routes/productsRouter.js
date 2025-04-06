const express = require("express") ;
const router = express.Router() ;
const upload = require("../config/multer_config");
const productModel = require("../models/product_model");

router.get("/", function (req, res) {
res.send("hey product route is working");
});

router.post("/create", upload.single("image"), async function (req, res) {
try{
    let {image, name, price, discount, bgcolor, panelcolor, textcolor } = req.body;
        let product = await productModel.create({
            image: req.file.buffer,
            name, 
            price, 
            discount, 
            bgcolor, 
            panelcolor, 
            textcolor
        });

        req.flash("success", "Product Created Successfully");
        res.redirect("/owners/admin");
    } catch(err) {
        res.send("err.message");
    }
    });
    

module. exports = router;