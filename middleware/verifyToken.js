const jwt = require('jsonwebtoken')


const verifyToken = (req, res, next) => {

    try {
    const authorization = req.headers.authorization;

    if(!authorization) {
        return res.send('You are not logged in. Please, log in and try again.')
    }
    
    const [ strategy, token ]  = authorization.split(" ");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    req.userId = decoded.userId;
    req.roleId = decoded.roleId;
    
    next();
    }catch(error){
        return res.status(500).json({
            success: false,
            message: "Somenthing went wrong with the user verification",
            error: error.message
    });
}
}

module.exports = verifyToken;