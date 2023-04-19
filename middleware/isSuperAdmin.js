const { User } = require("../models")

const isSuperAdmin = async (req, res, next) => {
  
    try {
        console.log(req.roleId);
        if(req.roleId === 1) {
                next();
        } else {
            return res.status(500).json({
                    success: true,
                    message: "You don't have permissions.",
                    });
            
        }

        
        } catch (error) {
                return res.status(500).json({
                    success: false,
                    message: "Something went wrong",
                    error: error.message,
                });
            }
};

module.exports = isSuperAdmin;