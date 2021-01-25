const User = require("../models/User");

exports.fruits = (req, res) => {
    
                res.status(200).json({msg: 'APPLE,MANGO,ORANGE'});
            }     