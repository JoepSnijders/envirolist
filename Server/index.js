import express from 'express';
import bodyParser from 'body-parser'
import mongodb from 'mongodb';

var router  = express.Router();
var app = express();
var port = 3000;
app.use('/api/v1', router);

router.get('/', (req, res) => {
  res.send('Hello World.');
});

app.listen(port, function () {
  console.log('Envirolist server up and running!');
});
