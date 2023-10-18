const crypto = require("crypto");

function SHA256(s) {
  return crypto.createHash("sha256").update(s).digest("hex");
}

console.log(SHA256("864556041199668"));
