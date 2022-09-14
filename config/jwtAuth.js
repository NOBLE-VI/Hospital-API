const jwt = require("jsonwebtoken");

module.exports.authenticationToken = function(req, res, next){

    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if(token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.SECRET_TOKEN, (err, user)=>{
        if(err) return res.sendStatus(403);
        req.username = user.username;
        req.password = user.password;
        next();

    })

}