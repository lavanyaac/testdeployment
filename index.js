const express = require('express')
const app = express()
const path = require('path');

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', function(req, res) {
	console.log("/");
    res.sendFile(path.join(__dirname + 'client/build/index.html'));
});

app.get('/hello', function (req, res) {
	console.log("/hello");
  res.send('Hello World!')
})

const port = process.env.PORT || 3001;
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})