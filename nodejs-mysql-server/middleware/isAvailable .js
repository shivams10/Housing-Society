const pool = require("../config/database")

exports.occupancyCheck = (req,res,next) => {
    pool.query(
        `select is_available from occupancies where id = ?`,
        (err,results)=> {
            if(err) {
                return res.status(500).json({
                    success:0,
                    message: "internal server error"
                })
            }
            
        })
}