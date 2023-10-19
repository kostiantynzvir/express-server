const express = require("express");
const compression = require("compression");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(compression());
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      "script-src": ["'self'", "code.jquery.com", "cdn.jsdelivr.net"],
    },
  }),
);
app.set('trust proxy', 1);
const RateLimit = require("express-rate-limit");
const limiter = RateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 20,
});
// Apply rate limiter to all requests
app.use(limiter);
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(cors());
const getHashedCode = require("./api/core.js");
app.post("/hash", (req, res) => {
  const { hashid } = req.body;
  const hashedCode = getHashedCode(hashid);

  if (String(hashedCode).length > 0) {
    res.json({ success: true, result: hashedCode });
  } else {
    res.json({ success: false, result: "Failed" });
  }
});

app.listen(3000, () => console.log("Server listening on port 3000"));
