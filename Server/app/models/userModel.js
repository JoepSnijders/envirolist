import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  type: String,
  id: String,
  accessToken: String,
  picture: Object,
  userID: String,
  dateAdded: Date
});

module.exports = mongoose.model('Users', userSchema);
