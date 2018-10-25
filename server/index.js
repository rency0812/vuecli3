const routerApi = require('./router')
const express = require('express')
const app = express()

// app.use('/api/login', (req, res, next) => {
//   res.json({
//     msg: '成功',
//     data: {
//       loginName: 'rency',
//       id: null
//     }
//   })
// })

app.use('/api', routerApi)
app.listen(3000)
console.log('success listen at port 3000.....')
