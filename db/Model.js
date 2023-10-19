const mongoose = require('mongoose');
const { Schema } = mongoose;

const OTPSchema = new Schema({
  auther: String,
  otp_code:String
});

const OTPModel = mongoose.model('OTPModel', OTPSchema);

module.exports = OTPModel;