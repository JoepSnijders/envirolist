import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var jobsSchema = new Schema({
  name: String,
  content: String,
  excerpt: String,
  location: {
    name: String,
    ltd: Number,
    lng: Number,
  },
  fromUser: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  image: {
    data: Buffer,
    contentType: String
  },
  dateAdded: Date,
});
module.exports = mongoose.model('Jobs', jobsSchema);
