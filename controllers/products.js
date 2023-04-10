const Product = require("../models/product");

//This function will show the input field and the add product button so that a new product could be added.
exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
};

//This function will post the newly added product and redirect to the '/' route.
exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

//This function will show all the products that have been added (if no products have been entered a message saying "No Products Found" will show) to the 'products' array on the '/' path.
exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll();
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
  });
};
