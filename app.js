// package aquiring
const express = require("express");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");
const expressSession = require("express-session")

// path aquiring
const app = express() ;
const path = require("path");
const ownersRouter = require("./routes/ownersRouter");
const productsRouter = require("./routes/productsRouter");
const usersRouter = require("./routes/usersRouter");
const indexRouter = require("./routes/index");
const db = require("./config/mongoose_connection");
require("dotenv").config();


//  Middleware Setup
app.use(express.json());
app. use(express.urlencoded({ extended: true }) );
app.use(cookieParser());
app.use(flash());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use(
    expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.JWT_KEY,
    })
);

// setting up base routes 
app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.use("/", indexRouter);

app.listen(3000);






