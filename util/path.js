const path = require("path");

module.exports = path.dirname(require.main.filename);

/*
Earlier with this method: res.sendFile(path.join(__dirname, "..", "views", "add-product.html"));
We were referring to the routes folder and then going out of that folder to find the views folder.

Now with this method: res.sendFile(path.join(rootDir, "views", "add-product.html"));
We are looking for the views folder from the vantage point of the root project folder where the app.js file is located.
*/
