const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    // 옵션은 많이 존재
    path: path.resolve(__dirname, "dist"),
  },
};
