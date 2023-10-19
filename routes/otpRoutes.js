const express = require('express');
const getHashedCode = require("../api/core.js");
const router = express.Router();

router.post("/hash", (req, res) => {
  const { hashid } = req.body;
  const hashedCode = getHashedCode(hashid);

  if (String(hashedCode).length > 0) {
    res.json({ success: true, result: hashedCode });
  } else {
    res.json({ success: false, result: "Failed" });
  }
});

module.exports = router;