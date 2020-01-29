const express = require('express')
const compression = require('compression')

const app = express()
app.use(compression())
app.use(express.static('./dist'))
app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})
