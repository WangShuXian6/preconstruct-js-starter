'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./my-a.cjs.prod.js");
} else {
  module.exports = require("./my-a.cjs.dev.js");
}
