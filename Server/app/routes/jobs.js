// Import Model
var Job = require('../models/jobsModel');

// GET: Jobs List
exports.list = function(req, res){
  // If number limit specified:
  if (req.query.number){
    var query = Job.find({}).sort('-dateAdded').limit(req.query.number);
  } else { // No limit specified
    var query = Job.find({}).sort('-dateAdded');
  }
  query.exec((err, requests) => {
    if (err) res.status(500);
    res.json(requests);
  });
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
  var job = new Job({
    name: req.body.activityName,
    excerpt: req.body.excerpt,
    content: req.body.description,
    location: {
      name: req.body.location,
      country: req.body.locationCountry,
      lat: req.body.locationLat,
      lng: req.body.locationLng
    },
    fromUser: req.body.fromUser,
    photo: req.body.photo,
    tags: req.body.tags,
    dateAdded: Date.now(),
  });
  job.save((err) => {
    if (err) res.status(500);
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
