const express = require('express')
const app = express()
const port = 4008

app.get('/', (req, res) => {
  res.send('Hello World Develop Team Trainocate!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
