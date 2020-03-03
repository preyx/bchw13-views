const { createConnection } = require('mysql2')

// const connection = createConnection(process.env.NODE_ENV === 'production' ? process.env.JAWSDB_URL : process.env.LOCAL_CONN)
const connection = createConnection({
  host: 'kil9uzd3tgem3naa.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  port: 3306,
  user: 'zjwiekeycjgjabh5',
  password: 'n3edil8tijyx8zpa',
  database: 'viu1ojst850pbzk4'
})

module.exports = connection
