const fs = require("fs");
const path = require("path");

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    // This entire line of code essentially points to the 'products.json' file in your project and that path is saved in the constant 'p'. We could have named the constant 'path' but then there would be naming conflict as we also have a path constant that is importing the path module from node.
    const p = path.join(
      path.dirname(require.main.filename),
      "data",
      "products.json"
    );

    //Creates products.json file (if it doesn't already exist), and writes (if products.json already exists with an array of at least 1 item, it will over-write the products.json file with the old and the new product added into the array) the array with a json object which is the product title entered by the user in the /admin/add-product path on the browser.
    fs.readFile(p, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll() {
    return products;
  }
};
