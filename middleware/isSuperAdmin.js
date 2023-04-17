const { User } = require("../models");

const isSuperAdmin = async (req, res, next) => {
    try {
        const superAdmin = await User.findOne({
        where: { role_id: req.roleId },
    });

    if (!superAdmin) {
        return res.status(500).json({
        success: true,
        message: "You don't have permissions.",
        });
    }

    if (req.roleId === 1) {
        next();
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