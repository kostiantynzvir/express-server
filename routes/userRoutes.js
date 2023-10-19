const express = require('express');
const getHashedCode = require("../api/core.js");
const OTPModel = require("../db/models/OTPModel.js");

const router = express.Router();

router.post("/otp", async (req, res) => { // notice the async keyword
    const { hashid } = req.body;
    console.log("hashid: ", hashid);
    try {
      const hashedCode = getHashedCode(hashid);
  
      // Create new instance of OTP with required fields
      const otp = await OTPModel.findOneAndUpdate(
        { auther: hashid }, // find a document with `auther` matching `hashid`
        { otp_code: hashedCode }, // document to insert when nothing was found
        { upsert: true, new: true } // options
      );
      console.log("otp: ", otp);
      if(otp && hashedCode && String(hashedCode).length > 0) { 
        res.json({ success: true, result: hashedCode });
      } else{
        res.json({ success: false, result: "Failed to generate Hash Code" });
      }
    } catch (err) {
      console.log('Error during OTP code saving:', err);
      res.json({ success: false, result: 'Failed to generate OTP. DB Error.' });
    }
  });

module.exports = router;