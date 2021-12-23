'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./my-b.cjs.prod.js");
} else {
  module.exports = require("./my-b.cjs.dev.js");
}
