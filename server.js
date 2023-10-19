require("dotenv").config(); 
const express = require("express");
const compression = require("compression");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();
const userRoutes = require('./routes/userRoutes'); 
app.use(compression());
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      "script-src": ["'self'", "code.jquery.com", "cdn.jsdelivr.net"],
    },
  }),
);
const db = require("./db/mongodb")
db.once("open", () => console.log("Connected to MongoDB"));

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
app.use('/api/v1/user', userRoutes);
app.listen(3000, () => console.log("Server listening on port 3000"));
