const pool = require("../config/database")

exports.occupancyCheck = (req,res,next) => {
    // let isAvailable = req.body.isAvailable;
    let userId = req.body.userId;
    let resourceId= req.body.resourceId;
    let occupancyDate= req.body.occupancyDate;

    pool.query(
        `select * from occupancy `,
        (err,results) => {
            if(err) {
                return res.status(500).json({
                    success:0,
                    message: "internal server error"
                })
            };
            for( let i=0; i<results.length; i++){
                if(occupancyDate === results[i].occupancyDate && resourceId === results[i].resourceId ){
                    return res.json({
                        success: 0,
                        message:"No availablity for the resource on the given date"
                    })
                };
            }
            next();
        }
    )
}