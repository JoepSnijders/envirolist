var User = require('../models/userModel');

// Facebook
// Post Facebook
exports.facebook = function(req, res){
  // Check if user exists
  console.log(req.body.id);
  User.findOne({'id': req.body.id}, function(err,user){
    if (user) {
      // User Already Exists
      console.log('Already a user');
      res.json({status: 'returning'});
    }
    else {
      // New User Detected
      console.log('New user');
      var user = new User({
        name: req.body.name,
        email: req.body.email,
        picture: req.body.picture,
        id: req.body.id,
        accessToken: req.body.accessToken,
        type: 'facebook',
        userID: req.body.userID,
        dateAdded: Date.now(),
      });
      user.save((err) => {
        console.log('saved');
        if (err) console.log(err);
        res.json({status: 'accepted new'});
      });
    }
  });

}
