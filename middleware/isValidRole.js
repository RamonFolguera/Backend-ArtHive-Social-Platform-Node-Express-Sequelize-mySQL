
const isValidRole = (role) => (req, res, next) => {
    if (req.auth?.role === role) {
      next();
    } else {
      res.status(403).json({ 
        success:false,
        message: "You have not permissions to do this, please contact an admin" 
    });
    }
  };

  module.exports = isValidRole;