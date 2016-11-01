import express from 'express';
import bodyParser from 'body-parser'
import mongodb from 'mongodb';
import mongoose from 'mongoose';
import morgan from 'morgan';
import { MONGODB_URL } from './app/constants';

mongoose.connect(MONGODB_URL); // Connect to DB.

var router  = express.Router();
var app = express();
var port = 3001;
app.use(bodyParser.urlencoded({ extended: false })); // Bodyparser to parse json from incoming POST's.
app.use(bodyParser.json());
app.use(morgan('dev')); // Log data transfers to console.
app.use('/api/v1', router);

// Import Routes
var jobsRoute = require('./app/routes/jobs');

// Allow CORS
router.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

// Routes
router.get('/jobs', jobsRoute.list);
router.get('/jobs/:id', jobsRoute.single);
router.post('/jobs', jobsRoute.add);
router.delete('/jobs/:id', jobsRoute.delete);

app.listen(port, function () {
  console.log('Envirolist server up and running! URL: localhost:' + port + '/api/v1');
});

// Close safely on error
var server = app.listen(port);
process.on('uncaughtException', function(ex) {
    server.close();
});
