var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 3000));

app.use('/dist', express.static('dist'));

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
});

app.listen(app.get('port'), function(error) {
  if (error) {
    console.error(error)
  } else {
	port = app.get('port')
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
});
