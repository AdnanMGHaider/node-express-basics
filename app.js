"use strict";
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
//Unlike pug, we need to import the handlebars engine
const expressHbs = require("express-handlebars");

const app = express();

//Unlike pug, we need to tell engine that handlebars engine exists.
app.engine("hbs", expressHbs());
app.set("view engine", "hbs");
// app.set("view engine", "pug");
app.set("views", "views");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: true }));
//This is to serve the css files statically and we provide a path to the folder that contains the css file.
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(8000);
