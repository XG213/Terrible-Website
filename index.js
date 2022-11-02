const express = require('express')
const app = express()
app.use(express.static('frountend'))
const port = 3000

app.get('/', (req, res) => {
    res.sendFile('index.html');
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})