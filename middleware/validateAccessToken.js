const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

let validateToken = asyncHandler(async (req, res, next) => {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_KEY, function(err, decoded) {
            if (err) {
                return res.status(401).json({ error: "User is not Authorized" });
            }

            req.user = decoded;
            next();
          });
        
        if (!token) {
            return res.status(401).json({ error: "User is not Authorized or token is missing in the request" });
        }
    }
})

module.exports = validateToken;