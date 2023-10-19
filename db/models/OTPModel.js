const mongoose = require('mongoose');
const { Schema } = mongoose;
const OTPSchema = new Schema({
  auther: String,
  otp_code:String
});

const OTPModel = mongoose.model('users', OTPSchema);

module.exports = OTPModel;