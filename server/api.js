const mysql = require('mysql')
const dbConfig = require('./db')
const sqlMap = require('./sqlMap')

const pool = mysql.createPool({
  host: dbConfig.mysql.host,
  user: dbConfig.mysql.user,
  password: dbConfig.mysql.password,
  database: dbConfig.mysql.database,
  port: dbConfig.mysql.port,
  multipleStatements: true // 多语句查询
})

module.exports = {
  addValue (req, res, next) {
    let name = req.query.name
    let age = req.query.age
    pool.getConnection((err, connection) => {
      if (err) console.log(err)
      var sql = sqlMap.addValue
      connection.query(sql, [name, age], (err, result) => {
        if (err) {
          result.code = 1
          res.json(err)
          return
        }
        result.code = 0
        result.msg = '成功'
        res.json(result)
        connection.release()
      })
    })
  },
  getValue (req, res, next) {
    // var id = req.query.id
    pool.getConnection((err, connection) => {
      if (err) { console.log(err) }
      var sql = sqlMap.getValue
      connection.query(sql, (err, result) => {
        res.json(result)
        connection.release()
        if (err) console.log(err)
      })
    })
  },
  setValue (req, res, next) {
    console.log(req.body)
    var id = req.body.id
    var name = req.body.name
    pool.getConnection((err, connection) => {
      if (err) console.log(err)
      var sql = sqlMap.setValue
      connection.query(sql, [name, id], (err, result) => {
        res.json(result)
        console.log(err)
        connection.release()
      })
    })
  }
}
