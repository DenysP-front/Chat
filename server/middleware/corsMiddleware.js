const cors = require("cors");

const corsMiddleware = cors({
  credentials: true,
});

module.exports = corsMiddleware;
