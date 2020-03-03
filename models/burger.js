const { selectAll, insertOne, updateOne } = require('../config/orm')

const burger = {
  getBurgers (cb) {
    selectAll(cb)
  },
  devourBurger (id, cb) {
    updateOne({ devoured: true }, id, cb)
  },
  addBurger (item, cb) {
    insertOne(item, cb)
  }
}

module.exports = burger
