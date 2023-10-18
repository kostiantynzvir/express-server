const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const path = require("path")
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(cors());
const getHashedCode = require("./api/core.js");
app.post("/hash", (req, res) => {
  const { hashid } = req.body;
  const hashedCode = getHashedCode(hashid);

  if (String(hashedCode).length > 8) {
    res.json({ success: true, result: hashedCode });
  } else {
    res.json({ success: false, result: "Failed" });
  }
});

app.listen(3000, () => console.log("Server listening on port 3000"));
