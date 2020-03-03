const db = require('./connection')

const orm = {
  selectAll (cb) {
    db.query('SELECT * FROM burgers', (err, items) => {
      if (err) throw err
      cb(items)
    })
  },
  insertOne (item, cb) {
    db.query('INSERT INTO burgers SET ?', item, err => {
      if (err) throw err
      cb()
    })
  },
  updateOne (updates, id, cb) {
    db.query('UPDATE burgers SET ? WHERE ?', [updates, { id: parseInt(id) }], err => {
      if (err) throw err
      cb()
    })
  }
}

module.exports = orm
