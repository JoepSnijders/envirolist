// Import Model
var Job = require('../models/jobsModel');

// GET: Jobs List
exports.list = function(req, res){
  res.send('List object');
};

// GET: Single Job
exports.single = function(req, res){
  var id = req.params.id;
  res.send('List object');
};

// POST: Add Job
exports.add = function(req, res){
  // TODO: Validate incoming data and store neatly.
  console.log(req.body);
  var job = new Job({
    name: req.body.name,
    excerpt: req.body.excerpt,
    content: req.body.content,
    locationName: req.body.locationName,
    locationLtd: req.body.locationLtd,
    locationLng: req.body.locationLng,
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
