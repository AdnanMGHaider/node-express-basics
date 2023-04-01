const path = require("path");
const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  const products = adminData.products;
  // console.log("shop.js", adminData.products);
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  res.render("shop", { prods: products, pageTitle: "Shop", path: "/" });
});

module.exports = router;

/*
1)The res.sendFile method requires an absolute path and not a relative path.
2)The __dirname variable will construct a path which points to the folder that contains the shop.js file, which is the routes folder, and then from there it will find its way to the shop.html file which is inside the views folder with the help of the path.join() method.
*/
