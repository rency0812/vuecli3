var sqlMap = {
  addValue: 'INSERT INTO user(name, age) VALUES (?, ?)',
  getValue: 'SELECT * FROM user',
  setValue: 'UPDATE user SET name = ? WHERE id = ?'
}

module.exports = sqlMap
