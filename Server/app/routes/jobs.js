// Import Model
var Job = require('../models/jobModel');

// GET: Jobs List
exports.list = function(req, res){
  var maxDistance = req.query.radius*1000 || 8; // Already converted to radians? Default = 8.
  var coords = [];
  coords[0] = req.query.lng ? req.query.lng : null ;
  coords[1] = req.query.lat ? req.query.lat : null ;

  // Search based on Location
  if (req.query.lng) {
    console.log('Location defined');
    query = Job.find({ // If number limit specified:
      loc: {
        $near: {
          $geometry : {
              type : "Point" ,
              coordinates : coords
            },
          $maxDistance : maxDistance
        }
      }
    }).limit(req.query.number ? req.query.number : null);
    query.exec((err, requests) => {
      if (err) res.status(500);
      res.json(requests);
    });
  } else {
    // Search NOT based on location
    console.log('Location not defined');
    var query = Job.find({}).sort({ dateAdded: -1 }).limit(req.query.number ? req.query.number : null).exec((err, requests) => {
      if (err) res.status(500);
      res.json(requests);
    });
  }
};

// GET: Single Job
exports.single = function(req, res){
  var id = req.params.id;
  var query = Job.findById(id, (err, request) => {
    if (err) res.status(500);
    res.json(request);
  });
};

// POST: Add Job
exports.add = function(req, res){
  // TODO: Validate incoming data and store neatly.
  var coords = [];
  coords[0] = req.body.locationLng;
  coords[1] = req.body.locationLat;
  var job = new Job({
    name: req.body.activityName,
    excerpt: req.body.excerpt,
    content: req.body.description,
    location: {
      name: req.body.location,
      country: req.body.locationCountry,
      lat: req.body.locationLat,
      lng: req.body.locationLng,
    },
    loc: coords,
    type: req.body.type,
    fromUser: req.body.fromUser,
    photo: req.body.photo,
    tags: req.body.tags,
    dateAdded: Date.now(),
  });
  job.save((err) => {
    if (err) console.log(err);
    res.json({ reply: 'Job added!'});
  });
};

// PUT: Favourite Job

// DEL: Delete Job
exports.delete = function(req, res){
  var id = req.params.id;
  Job.find({ _id: id }).remove((err) => {
    if (err) res.status(500);
    res.send("Job " + id + " has been removed.");
  })
};
