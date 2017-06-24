const express = require('express')
const app = express()
var port = process.env.PORT || 3000

var helmet = require('helmet')
app.use(helmet())

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.post('/hello/:name', function(req, res) {
  console.log("Hello, ", req.params.name);
  res.status(200).json({
      message: 'Data received: ' + req.params.name
  });
})

app.listen(port, function () {
  console.log('Example app listening on port 3000!')
})