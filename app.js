const express = require('express')
const app = express()
const port = 4005

app.get('/', (req, res) => {
  res.send('Hello World Team!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
