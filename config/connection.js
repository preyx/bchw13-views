const { createConnection } = require('mysql2')

// const connection = createConnection(process.env.NODE_ENV === 'production' ? process.env.JAWSDB_URL : process.env.LOCAL_CONN)
const connection = createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'rootroot',
  database: 'burgers_db'
})

module.exports = connection
