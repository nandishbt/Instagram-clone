var mongoose = require('mongoose');
const plm = require('passport-local-mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/insta-clone');

const userSchema = mongoose.Schema({
  username : String,
  name : String,
  email:String,
  profilephoto : String,
  post : [{type:mongoose.Schema.Types.ObjectId , ref :'Post'}]
})

userSchema.plugin(plm);

module.exports = mongoose.model('User' , userSchema);