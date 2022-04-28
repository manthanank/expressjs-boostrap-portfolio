const express = require('express')
const path = require('path')
const app = express()
const port = 3005

app.use(express.static(path.join(__dirname, "public")))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port, () => {
  console.log(`Portfolio app listening on port at http://localhost:${port}`)
})
