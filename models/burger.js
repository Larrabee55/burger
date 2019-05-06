var orm = require("../config/orm.js");

var burger = {
  // functions that call ORM functions using specific input for the ORM
  all: function (cb) {
    orm.all("burgers", function (res) {
      cb(res);
    });
  },
  create: function (cols, vals, cb) {
    orm.create("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  update: function (objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function (res) {
      cb(res)
    });
  }
}
// export the database functions for the controller (burgers_controllers.js)
module.exports = burger;