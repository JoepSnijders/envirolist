// Import Model
var Job = require('../models/jobsModel');

// GET: Jobs List
exports.list = function(req, res){
  var query = Job.find({});
  query.exec((err, requests) => {
    if (err) res.send(err);
    res.json(requests);
  });
};

// GET: Single Job
exports.single = function(req, res){
  var id = req.params.id;
  var query = Job.findById(id, (err, request) => {
    if (err) res.send(err);
    res.json(request);
  });
};

// POST: Add Job
exports.add = function(req, res){
  // TODO: Validate incoming data and store neatly.
  var job = new Job({
    name: req.body.name,
    excerpt: req.body.excerpt,
    content: req.body.content,
    location: {
      name: req.body.locationName,
      ltd: req.body.locationLtd,
      lng: req.body.locationLng
    },
    fromUser: req.body.fromUser,
    dateAdded: Date.now(),
  });
  job.save((err) => {
    if (err) res.send(err);
    res.json({ reply: 'Job added!'});
  });
};

// PUT: Favourite Job

// DEL: Delete Job
exports.delete = function(req, res){
  var id = req.params.id;
  Job.find({ _id: id }).remove((err) => {
    if (err) res.send(err);
    res.send("Job "+ id + " has been removed.");
  })
};
