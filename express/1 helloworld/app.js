const express = require('express');
const app = express();
var port = process.env.PORT || 3000;

// parameter middleware that will run before the next routes
// works for every request type (GET, POST, ...)
app.param('name', function(req, res, next, name) {

    // check if the user with that name exists
    // do some validations
    // add -dude to the name
    var modified = name + '-dude';

    // save name to the request
    req.params.name = modified;

    next();
});

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