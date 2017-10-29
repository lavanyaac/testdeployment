const express = require('express')
const app = express()
const path = require('path');

app.get('/', function (req, res) {
  res.send('Hello World!')
})

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
const port = process.env.PORT || 3001;
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})